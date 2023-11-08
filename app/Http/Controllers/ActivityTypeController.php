<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\ActivityType;

class ActivityTypeController extends Controller
{
    public function help($type = false) {
        return ActivityType::where('id', $type)->firstOrFail();
    }
}
