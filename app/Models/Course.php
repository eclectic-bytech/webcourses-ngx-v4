<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $hidden = ['active_bid', 'published', 'private'];

    public function publisher() {
        return $this->belongsTo(Publisher::class);
    }

    public function theme() {
        return $this->hasOne(Theme::class, 'publisher_id', 'publisher_id');
    }

    // used in all course catalogues
    public function userProgress() {
        $user = auth()->user();
        return $this
            ->belongsTo(UserProgress::class, 'id', 'course_id')
            ->where('user_id', $user['id']);
    }

    public function courseSyllabus() {
        return $this->hasMany(CourseSyllabus::class);
    }

    public function participants() {
        return $this->hasMany(UserProgress::class);
    }

    public function userAnswers() {
        $user = auth()->user();
        return $this->hasManyThrough(
            UserAnswer::class,
            UserProgress::class,
            'course_id',
            'progress_id'
        )
        ->where('user_progress.user_id', $user['id'])
        // ->distinct('user_answers.activity_id')
        // ->distinct('activity_id')
        // ->groupBy('activity_id')
        ;
    }
}
