<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CodesUse extends Model
{
    use HasFactory;

    public function user() {
        return $this->hasOneThrough(
            User::class,
            UserProgress::class,
            'id',
            'id',
            'user_progress_id',
            'user_id'
        );
    }

    public function completed_activities_count() {
        return $this
            ->hasMany(UserAnswer::class, 'user_progress_id', 'progress_id')
            ->distinct('activity_id')
            ->count();
    }
}
