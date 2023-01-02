<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Advice extends Model
{
    use HasFactory;

    public $table = "advices";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'content',
        'attachment',
        'author_id',
    ];

    protected $appends = [
        'name_author'
    ];

    protected $casts = [
        'attachment' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function nameAuthor(): Attribute
    {
        return new Attribute(fn () => $this->user->profile?->email);
    }

    public function topic()
    {
        return $this->belongsTo(Topic::class, 'topic_id');
    }
}
