<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Syllabus;

class SyllabusController extends Controller
{
    public function activity_set(int $aid) {

        $requested_activity_meta = Syllabus::where('activity_id', $aid)->first();

        return $requested_activity_meta;

    }
}
