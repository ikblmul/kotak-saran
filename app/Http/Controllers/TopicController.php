<?php

namespace App\Http\Controllers;

use App\Builder\TopicSettingBuilder;
use App\Events\TopicEvent;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TopicController extends Controller
{

    // /** @var User|null for better usability */
    // public $user;

    // function __construct()
    // {
    //     $this->user = Auth::user();
    //     dd($this->user);
    // }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $topic = Topic::query();

        $topic->orderBy('id', 'desc');
        // get self topic



        $topic->where('author_id', '=', auth()->user()->id);


        if ($request->q) $topic->where('title', 'ilike', "%$request->q%");

        return Inertia::render('Topic/List', ['topic' => $topic->paginate()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Topic/Create', []);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'publish' => 'required',
            'publish_advice' => 'required',
            'same_user' => 'required|boolean',
            'max_slow_mode' => 'required|integer',
            'only_auth' => 'required|boolean',
            // 'slow_mode' => 'required|boolean',
            // auto_publish
        ]);

        $topicMeta = TopicSettingBuilder::of(collect($request->only('same_user', 'only_auth')));
        $maxSlowMode = $request->get('max_slow_mode', 0);

        if ($maxSlowMode > 0) $topicMeta->setSlowMode($maxSlowMode);



        $topic = $request->user()->topics()->create([
            'title' => $request->title,
            'description' => $request->description,
            'publish' => $request->publish,
            'publish_advice' => $request->publish_advice,
            'meta' => $topicMeta->build(),
        ]);

        broadcast(new TopicEvent($topic, 'created'));

        return redirect()->route('topic.index')->with('success', 'Berhasil Cuy');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Topic $topic)
    {
        return Inertia::render('Topic/Update', compact($topic));
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
