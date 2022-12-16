<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// idea: rename to just `Syllabus`, let it serve chapter, course+ syllaby array
class CourseSyllabus extends Model
{
    use HasFactory;
    protected $table = 'course_syllabus';
}
