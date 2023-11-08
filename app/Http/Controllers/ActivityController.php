<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\UserAnswerController;

use App\Models\Help;
use App\Models\CourseSyllabus;
use App\Models\UserProgress;

use App\Services\ActivityService;

class ActivityController extends Controller
{

    public function show(int $aid, ActivityService $activityService)
    {
        $activitiesMetaSet = $activityService->build_activities_meta_set(resolve('activityMeta'));
        $activitiesSet = $activityService->get_activities($activitiesMetaSet, resolve('pid'));

        // Update user's selected course
        auth()->user()->current_course_id = resolve('activityMeta')->course_id;
        auth()->user()->update();

        return $activitiesSet;
    }

    public function before_and_after_activity($aid) {

        function perform_count($aids_set, $pid, $a) {
            $total['correct'] = $total['wrong'] = $total['total'] = 0;
            foreach ($aids_set as $key => $aid) {
                $activity = $a->build_activity($aid, $pid);
                foreach ($activity['answers'] as $j => $answer) {
                    if ($answer['correct']) $total['total']++;
                    if (isset($answer['selected'])) {
                        $answer['correct'] ? $total['correct']++ : $total['wrong']++;
                    }
                }
            }
            $total['missed'] = $total['total'] - $total['correct'];
            return $total;
        }

        $before_set_aids = [2122, 2538, 2539, 3475];
		$after_set_aids = [3527, 3528, 3529, 3530];
        $a = new ActivityService();
        $count['before'] = perform_count($before_set_aids, resolve('pid'), $a);
        $count['after'] = perform_count($after_set_aids, resolve('pid'), $a);

        return json_encode($count);
    }

    public function help($type = false) {
        if ($type) {
            return Help
                ::where('id', $type)
                ->first();
        } else {
            return false;
        }
    }
}
