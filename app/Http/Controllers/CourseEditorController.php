<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Publisher;
use App\Models\Course;
use App\Models\CourseSyllabus;

class CourseEditorController extends Controller
{
    public function demo(int $aid) {
        $uid = auth()->user()->id;

        // get user's publisher id
        $uid_pub_id = Publisher::where('owner_uid', $uid)->first();

        if ($uid_pub_id) {

            // get activity's publisher id
            $activity_cid = CourseSyllabus::where('activity_id', $aid)->first()->course_id;
            $cid_pub_id = Course::firstWhere('id', $activity_cid)->publisher_id;

            // if user publisher id matches activity's pub id, update db
            if ($uid_pub_id->id === $cid_pub_id) {
                $courseSyllabus = CourseSyllabus::where('activity_id', $aid)->first();
                if ($courseSyllabus) {
                    $courseSyllabus->demo = $courseSyllabus->demo ? 0 : 1;
                    $courseSyllabus->save();
                }
            }
        }

        return false;
    }
}
