<?php

use App\Http\Controllers\ActivityController;
use App\Models\Activity;

function activityMeta(int $aid) {
    $controller = new ActivityController();
    $activity = $controller->activity($aid)->first();
    $meta = $activity->meta;
    return $meta;
}
