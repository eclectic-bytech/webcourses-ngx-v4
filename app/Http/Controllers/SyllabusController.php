<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\ActivityController;
use App\Models\Syllabus;

class SyllabusController extends Controller
{

    public function activity_set(int $requested_aid) {
        // gets called by front-end /webcourse/activties/{aid}

        $requestedActivity = $this->requestedActivity($requested_aid);

        if (is_int($requestedActivity['pid'])) {
            // We found a user progress ID for course to which requested_aid belongs

            $activitiesMetaSet = $this->build_activities_meta_set($requestedActivity['meta']);
            $activitiesSet = $this->get_activities($activitiesMetaSet, $requestedActivity['pid']);

            return $activitiesSet;
        }

        // user has no access to course to which requested activity belongs
        return 'No soup for you';

    }

    public function build_activities_meta_set($requested_aid_meta) {
        $cid = $requested_aid_meta->course_id;
        $activities_meta_set = [];

        // get preceding activities: requested activity is not first in set
        $aid_meta = $requested_aid_meta;
        while ($aid_meta->cont === 1) {
            $aid_meta = getActivityMetaBySeq($cid, $aid_meta->seq - 1);
            array_unshift($activities_meta_set, $aid_meta);
        }

        // with preceding activities added to the set, add the activity that was actyally requested
        array_push($activities_meta_set, $requested_aid_meta);

        // get following activities until we hit an activity that is not a set continuation
        $aid_meta = $requested_aid_meta;

        do {
            $aid_meta = getActivityMetaBySeq($cid, $aid_meta->seq + 1);
            // is_null checks required on last activity of a course
            if (!is_null($aid_meta) && $aid_meta->cont === 1) {
                array_push($activities_meta_set, $aid_meta);
            }
        } while (!is_null($aid_meta) && $aid_meta->cont === 1);

        return $activities_meta_set;
    }

    public function get_activities($activities_meta_set, $pid) {
        $activity_set = [];
        $i = 0;
        $controller = new ActivityController();

        do {
            $activity = $controller->build_activity($activities_meta_set[$i]->activity_id, $pid);
            $user_answers = $activity['user_answers'];
            $getNext = ( is_object($user_answers) && $user_answers->count() ) ? TRUE : FALSE;

            // we're pushing $activity. unlike $unassociated_activity, it has its empty user_answer keys unset
            // when it goes throgh build_activity()
            array_push($activity_set, $activity);
            $i++;
        } while ( isset($activities_meta_set[$i]) && $getNext );

        return $activity_set;
    }

    private function requestedActivity($aid) {
        $uid = auth()->user()->id;

        // get meta data on requested activity
        $requestedActivity['meta'] = Syllabus::where('activity_id', $aid)->first();

        // get user's course progress id
        $requestedActivity['pid'] = getUserProgress($uid, $requestedActivity['meta']->course_id)->id;

        return $requestedActivity;
    }
}

