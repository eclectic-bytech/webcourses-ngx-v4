<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    use HasFactory;

    protected $hidden = ['created_at', 'updated_at'];

    public function syllabus() {
        return $this->hasMany(CourseSyllabus::class)->orderBy('seq', 'ASC');
    }
}
