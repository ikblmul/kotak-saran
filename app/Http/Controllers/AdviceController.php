<?php

namespace App\Http\Controllers;

use App\Builder\TopicSettingBuilder;
use App\Models\Advice;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdviceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $topic = Topic::query();


        $topic->orderBy('id', 'desc');

        if ($request->q) $topic->where('title', 'ilike', "%$request->q%");

        if ($request->has('my_group')) {
            $topic->where('author_id');
        } else {
            $topic->where('publish', true);
        }



        return Inertia::render('Advice/List', ['topic' => $topic->paginate()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $topic = Topic::find($request->get('topic_id'));
        $content = $request->get('content');
        $meta = TopicSettingBuilder::of($topic->meta);

        if ($meta->hasOnlyAuth() && !auth()->check()) return abort(404);

        $topic->advices()->create([
            'content' => $content,
            'attachment' => '',
            'author_id' => auth()->user()->id ?? null,
        ]);

        // Push

        return Inertia::location(redirect()->route('thanks.forfill'));
        return Inertia::location(route('advice.show', ['advice' => $request->get('topic_id')]));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $topic = Topic::with('user')->find($id);

        if ($topic->close_at) return abort(404);

        $meta = TopicSettingBuilder::of($topic->meta);

        $isLogin = auth()->check() ? Advice::where('author_id', auth()->user()->id)->where('topic_id', $id)->exists() : false;

        if ($meta->hasSameUser() && $isLogin) return response("terima kasih sudah mengisi");

        // return abort(404);
        // dd($meta->hasOnlyAuth() && auth()->check(), auth()->check(), $meta->hasOnlyAuth());
        if ($meta->hasOnlyAuth() && !auth()->check()) return abort(403);
        // dd($topic->advices->toArray());

        return Inertia::render('Advice/Show', ['topic' => $topic, 'advices' => $topic->advices, 'topic_id' => $id]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
