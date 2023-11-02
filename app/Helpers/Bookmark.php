<?php

use App\Http\Controllers\ActivityController;
use App\Models\Activity;

function bookmarkDesc(int $aid) {
    $activity = Activity::where('id', $aid)->first();
    $properties = ['prequestion', 'question', 'assess_text', 'after_word'];

    foreach ($properties as $key => $property) {
        if (!empty($activity[$property])) {
            return strip_tags($activity[$property]);
        }
    }

    return "No description.";
}
