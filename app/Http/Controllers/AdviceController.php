<?php

namespace App\Http\Controllers;

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
        $content = $request->get('content');


        Topic::find($request->get('topic_id'))->advices()->create([
            'content' => $content,
            'attachment' => '',
            'author_id' => auth()->user()->id,
        ]);


        return redirect()->route('advice.show', ['advice' => $request->get('topic_id')]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $topic = Topic::find($id);
        // dd($topic->advices->toArray());

        return Inertia::render('Advice/Show', ['topic' => $topic, 'advices' => $topic->advices]);
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
