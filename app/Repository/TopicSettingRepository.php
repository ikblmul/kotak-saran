<?php

namespace App\Repository;

use App\Models\Topic;
use Illuminate\Support\Collection;

class TopicSettingRepository extends RepositoryContract
{

    /**
     * 
     * @var Collection
     */
    private $metaTopic;

    function __construct(protected Topic $topic)
    {
    }

    function hasSlowMode()
    {
        return $this->metaTopic->has('slow_mode');
    }

    function getMaxSlowMode()
    {
        return $this->metaTopic->get('slow_mode.max_slow_mode', -1);
    }

    function hasOnlyAuth()
    {
        return $this->metaTopic->get('only_auth', false);
    }

    function allowSameUser()
    {
        return $this->metaTopic->get('allow_same_user', true);
    }

    // function __call($name, $arguments)
    // {

    // }
}
