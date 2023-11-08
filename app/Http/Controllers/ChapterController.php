<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chapter;
use App\Models\Course;

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ChapterController;

class ChapterController extends Controller
{

    /**
     * Returns list of chapters in a course
     *
     * @return \Illuminate\Http\Response
     */
    public function index($cid) {

        $course = Course::where('id', $cid)
            ->where('published', 1)
            ->with('chapterIndex')
            ->first();

        if ( $course->private && !studentOfPrivate($cid) ) {
            abort(code:404);
        }

        $course = json_decode($course);
        return $course->chapter_index;
    }

}
