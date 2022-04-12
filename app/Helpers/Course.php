<?php

use App\Http\Controllers\CourseSyllabusController;
use App\Http\Controllers\UserProgressController;

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
