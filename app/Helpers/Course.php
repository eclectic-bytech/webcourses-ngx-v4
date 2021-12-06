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
