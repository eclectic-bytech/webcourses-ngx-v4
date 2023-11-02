<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\ActivityController;
use App\Models\CourseSyllabus;
use App\Models\UserProgress;

class SyllabusController extends Controller
{

    public function activity_set(int $requested_aid) {
        // gets called by front-end /webcourse/activties/{aid}

        $requestedActivity = $this->requestedActivity($requested_aid);

        if (is_int($requestedActivity['pid'])) {
            // We found a user progress ID for course to which requested_aid belongs

            $activitiesMetaSet = $this->build_activities_meta_set($requestedActivity['meta']);
            $activitiesSet = $this->get_activities($activitiesMetaSet, $requestedActivity['pid']);

            // Update user's selected course
            auth()->user()->current_course_id = $requestedActivity['meta']->course_id;
            auth()->user()->update();

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
            $aid_meta = CourseSyllabus::where('course_id', $cid)
                ->where('seq', $aid_meta->seq - 1)
                ->first();
            array_unshift($activities_meta_set, $aid_meta);
        }

        // with preceding activities added to the set, add the activity that was actyally requested
        array_push($activities_meta_set, $requested_aid_meta);

        // get following activities until we hit an activity that is not a set continuation
        $aid_meta = $requested_aid_meta;

        do {
            $aid_meta = CourseSyllabus::where('course_id', $cid)
                ->where('seq', $aid_meta->seq + 1)
                ->first();
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
            $getNext = isset($activity['user_answers']) ? TRUE : FALSE;

            // we're pushing $activity. unlike $unassociated_activity, it has its empty user_answer keys unset
            // when it goes throgh build_activity()
            array_push($activity_set, $activity);
            $i++;
        } while ( isset($activities_meta_set[$i]) && $getNext );

        return $activity_set;
    }

    private function requestedActivity($aid)
    {
        $activity['meta'] = CourseSyllabus::where('activity_id', $aid)->first();

        $pid = UserProgress::where('user_id', resolve('uid'))
            ->where('course_id', $activity['meta']->course_id)
            ->first()->id;

        if ($pid) {
            $activity['pid'] = $pid;
            return $activity;
        }
    }
}

