<?php

use App\Http\Controllers\CourseSyllabusController;
use App\Http\Controllers\UserProgressController;

use App\Models\UserProgress;
use App\Models\Syllabus;

function getActivityMeta(int $aid) {
    $controller = new CourseSyllabusController();
    return $controller->activityMeta($aid);
}

function getUserProgress(int $uid, int $cid) {
    $controller = new UserProgressController();
    return $controller->userProgress($uid, $cid);
}

// isJSON Source: https://ankiths.com.np/check-if-the-data-is-json-encoded-or-not/
function isJSON($string){
    return is_string($string) && is_array(json_decode($string, true)) && (json_last_error() == JSON_ERROR_NONE) ? true : false;
}

function grantAccess($cid, $uid) {
    $user_progress = new UserProgress;

    $user_progress->user_id = $uid;
    $user_progress->course_id = $cid;
    $user_progress->build_id = 0;
    $user_progress->selected_aid = Syllabus::where('course_id', $cid)->where('seq', 0)->first()->activity_id;
    $user_progress->demo = 0;

    $user_progress->save();
    return $user_progress->id;
}

function studentOfPrivate($cid) {
    if (Auth::check()) {
        $pid = UserProgress::where('user_id', auth()->user()->id)->where('course_id', $cid)->first();
        return $pid ? true : false;
    }
}

function validateCourseData($course) {
    return $course->validate([
        'title' => ['required', 'min:16', 'max:128'],
        'short_desc' => ['required', 'min:32', 'max:256'],
        'private' => 'boolean',
        'audience' => '',
        'long_desc' => '',
        'objective' => '',
        'eval_type' => 'in:"Online", "Instructor", "Online + Instructor", ""',
        'price' => ['required', 'integer', 'min:0', 'max:99999']
    ]);
}
