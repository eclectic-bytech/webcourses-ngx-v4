<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Chapter;

class Course extends Model
{
    use HasFactory;

    protected $hidden = ['active_bid', 'published'];

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

    public function chapterIndex() {
        return $this->hasManyThrough(
            Chapter::class,
            CourseSyllabus::class,
            'course_id',
            'id',
            'id',
            'chapter_id'
        )
        ->with(['syllabus' => function($query) {
            $query->orderBy('seq', 'ASC');
        }])
        ->orderBy('seq')
        ->distinct();
    }

}
