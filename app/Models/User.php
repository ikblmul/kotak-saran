<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use Spatie\Permission\Traits\HasRoles;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'phone_num',
        'password'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',

    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function topics()
    {
        return $this->hasMany(Topic::class, 'author_id');
    }

    public function profile()
    {
        return $this->hasOne(Profile::class, 'user_id');
    }

    public function advices()
    {
        return $this->hasMany(Advice::class, 'advice_id');
    }

    public function groupUser()
    {
        return $this->belongsToMany(User::class, 'group_user', 'group_id', 'user_id')->withPivot(['accept_at']);
    }

    static function makeAnonymousUsers()
    {
        return collect((object)[
            'profiles' => (object)[
                'fullname' => 'Anonymous',
                'verify_user' => false,
            ],
            'email' => '',
            'phone_num' => '',
        ]);
    }
}
