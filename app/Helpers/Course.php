<?php

use App\Http\Controllers\CourseSyllabusController;

function getActivityMeta(int $aid) {
    $controller = new CourseSyllabusController();
    return $controller->activityMeta($aid);
}
