<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\UserAnswerController;

use App\Models\CourseSyllabus;
use App\Models\UserProgress;

use App\Services\ActivityService;

class ActivityController extends Controller
{

    public function show(int $aid, ActivityService $aS)
    {
        $activitiesMetaSet = $aS->build_activities_meta_set(resolve('activityMeta'));
        $activitiesSet = $aS->get_activities($activitiesMetaSet, resolve('pid'));

        // Update user's selected course
        auth()->user()->current_course_id = resolve('activityMeta')->course_id;
        auth()->user()->update();

        return $activitiesSet;
    }

    public function before_and_after_activity(int $aid, ActivityService $aS) {
        return json_encode(array(
            "before" => $aS->perform_count([2122, 2538, 2539, 3475]),
            "after" => $aS->perform_count([3527, 3528, 3529, 3530])
        ));
    }

}
