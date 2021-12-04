<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CourseSyllabus;

class CourseSyllabusController extends Controller
{
    public function activityMeta(int $aid) {
        return CourseSyllabus
            ::where('activity_id', $aid)
            ->first();
    }
}
