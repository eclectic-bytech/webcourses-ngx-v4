<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;

class ActivityController extends Controller
{
    public function activity($aid = false) {
        return Activity
            ::where('id', $aid)
            ->with('meta', 'answers')
            ->get();
    }

    public function chapters($aid = false) {
        // return Chapter::where
        return false;
    }
}
