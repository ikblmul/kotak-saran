<?php

use App\Models\Topic;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

// Authenticate channel for topic event
Broadcast::channel('topic.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('advice.topic.{id}', function ($user, $id) {

    $topic = Topic::find($id);


    return $topic->publish || $user->id === $topic->author_id;
});

Broadcast::channel('advice.{id}', function ($user, $id) {

    $topic = Topic::find($id);


    return $topic->publish || $user->id === $topic->author_id;
});
