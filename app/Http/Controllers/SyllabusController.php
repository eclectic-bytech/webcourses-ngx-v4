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
            $activities_meta_set = $this->build_activities_meta_set($requested_aid_meta);
            $activity_set = $this->get_activities($activities_meta_set, $pid);
            return $activity_set;
        }

        // user has no access to course to which requested activity belongs
        return 'No soup for you';

    }

    public function get_activities($activities_meta_set, $pid) {
        $activity_set = [];
        $i = 0;

        do {
            $controller = new ActivityController();
            $activity = $controller->build_activity($activities_meta_set[$i]->activity_id, $pid);

            // doing $activity['user_answers']->isNotEmpty executes user_answers method
            // that sets an empty $activity['user_answers'] when there are none, breaks the front end
            $unassociated_activity = clone($activity);
            $getNext = $unassociated_activity['user_answers']->isNotEmpty() ? TRUE : FALSE;

            // we're pushing $activity. unlike $unassociated_activity, it has its empty user_answer keys unset
            // when it goes throgh build_activity()
            array_push($activity_set, $activity);
            $i++;
        } while ( isset($activities_meta_set[$i]) && $getNext );

        return $activity_set;
    }

    public function build_activities_meta_set($requested_aid_meta) {
        $aid_meta = $requested_aid_meta;
        $cid = $aid_meta->course_id;
        $activities_meta_set[] = $aid_meta;

        // get preceding activities: requested activity is not first in set
        while ($aid_meta->cont === 1) {
            $aid_meta = getActivityMetaBySeq($cid, $aid_meta->seq - 1);
            array_unshift($activities_meta_set, $aid_meta);
        }

        // get following activities until we hit an activity that is not a set continuation
        do {
            $aid_meta = getActivityMetaBySeq($cid, $aid_meta->seq + 1);
            if ($aid_meta->cont === 1) {
                array_push($activities_meta_set, $aid_meta);
            }
        } while ($aid_meta->cont === 1);

        return $activities_meta_set;
    }

}

