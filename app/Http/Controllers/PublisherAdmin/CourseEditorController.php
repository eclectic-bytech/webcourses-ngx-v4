<?php

namespace App\Http\Controllers\PublisherAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Publisher;
use App\Models\Course;
use App\Models\CourseSyllabus;

class CourseEditorController extends Controller
{
    public function demo(int $aid)
    {
        // get activity's publisher id
        $aid_meta = CourseSyllabus::findOrFail($aid);

        if ($aid_meta) {
            $course = Course::findOrFail( $aid_meta->course_id );

            if (resolve('pub_id') === $course->publisher_id) {
                $aid_meta->demo = $aid_meta->demo ? 0 : 1;
                $aid_meta->save();
            }
        }
    }
}
