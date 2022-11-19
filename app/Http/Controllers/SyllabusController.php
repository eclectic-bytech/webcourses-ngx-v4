<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\ActivityController;
use App\Models\Syllabus;

class SyllabusController extends Controller
{
    public function activity_set(int $aid) {

        $requested_activity_meta = Syllabus::where('activity_id', $aid)->first();

        $uid = auth()->user()->id;
        $cid = $requested_activity_meta->course_id;
        $pid = getUserProgress($uid, $cid)->id;

        if ($pid) {
            // User has access to course

            if ($requested_activity_meta->cont === 0) {
                // requested activity is first in set

                // requested activity is first in set: but is it the last?
                $next_activity = $requested_activity_meta->seq + 1;
                $controller = new ActivityController();
                $activity[0] = $controller->activity($aid);
                return $activity;

            } else {
                // requested activity is not the first in set

            }

            return $requested_activity_meta;
        }

        // user has no access to course to which requested activity belongs
        return 'No soup for you';

    }
}
