<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Publisher;
use App\Models\Course;
use App\Models\CourseSyllabus;

class CourseEditorController extends Controller
{
    public function demo(int $aid) {
        $uid = auth()->user()->id;

        // get user's publisher id
        $uid_pub_id = Publisher::where('owner_uid', $uid)->first()->id;

        if ($uid_pub_id) {

            // get activity's publisher id
            $activity_cid = CourseSyllabus::where('activity_id', $aid)->first()->course_id;
            $cid_pub_id = Course::firstWhere('id', $activity_cid)->publisher_id;

            // if user publisher id matches activity's pub id, update db
            if ($uid_pub_id === $cid_pub_id) {
                DB::table('course_syllabus')->where('activity_id', $aid)->update(['demo' => DB::raw('NOT demo')]);
            }
        }

        return false;
    }
}
