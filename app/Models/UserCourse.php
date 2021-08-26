<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCourse extends Model
{
    use HasFactory;
    protected $table = 'user_progress';

    public function course() {
        return $this
            ->hasOne(Course::class, 'id', 'course_id')
            ->with(['publisher', 'theme'])
        ;
    }
}
