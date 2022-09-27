<?php

namespace App\Builder;

use App\Models\Topic;
use Illuminate\Support\Collection;

class TopicSettingBuilder
{

    /**
     * 
     * @var Collection
     */
    private $metaTopic;

    function __construct()
    {
        $this->metaTopic = collect();
    }

    /**
     * 
     * @param Collection $metaTopic
     */
    function setSettings($metaTopic)
    {
        $this->metaTopic = $metaTopic;

        return $this;
    }

    /**
     * Set Default Slow Mode To In Minutes
     *   
     * @param integer $value Setting Default Slow Mode In Minute Periode
     */
    function setSlowMode($value = 1)
    {
        $this->metaTopic->put('slow_mode.max_slow_mode', $value);

        return $this;
    }

    /**
     * Set Only Authenticate Enable To Give Advice
     * 
     * @param boolean $value
     */
    function setOnlyAuth($value = false)
    {
        $this->metaTopic->put('only_auth', $value);

        return $this;
    }

    /**
     * Set Only Same User Allow Give Multiple Advice
     * 
     * @param boolean $value
     */
    function setSameUser($value)
    {
        return $this->metaTopic->get('allow_same_user', $value);

        return $this;
    }

    function build()
    {
        return $this->metaTopic;
    }


    /**
     * Pre Fillabel Topic
     * 
     * @param Topic $topic 
     */
    static function of($topic)
    {
        return (new static)->setSettings($topic->meta);
    }
}
