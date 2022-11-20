<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\ActivityController;
use App\Models\Syllabus;

class SyllabusController extends Controller
{
    public function activity_set(int $aid) {

        $uid = auth()->user()->id;

        // get meta data on requested activity
        $requested_aid_meta = Syllabus::where('activity_id', $aid)->first();

        // get user's course progress id
        $pid = getUserProgress($uid, $requested_aid_meta->course_id)->id;

        if ($pid) {
            // User has access to course
            $activity_set[] = $this->build_activity_set($requested_aid_meta, $pid);
            return $activity_set;
        }

        // user has no access to course to which requested activity belongs
        return 'No soup for you';

    }

    public function build_activity_set($requested_aid_meta, $pid) {
        $get_next_activity = $get_prev_activity = true;

        // only forward: if cont === 0 && user_answer
        // only backward: if cont === 1 && !user_answer
        // front and back: if cont === 1 && user_answer

        if ($requested_aid_meta->cont === 0) {
            // requested activity is first in set
            $get_prev_activity = false;

            $activity = $this->build_activity($requested_aid_meta->activity_id, $pid);
            return $activity;
        }
    }

    private function build_activity($aid, $pid) {
        $controller = new ActivityController();
        $activity = $controller->activity($aid, $pid);
        return $activity;
        // create the requested activity
    }

}
