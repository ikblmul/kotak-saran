<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;

    public $table = "topics";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'publish',
        'publish_advice',
        'meta',
    ];

    protected $casts = [
        'meta' => 'collect',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
