<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Activity;
use App\Models\Help;

class ActivityController extends Controller
{
    public function activity($aid, $pid) {
        return Activity
            ::where('id', $aid)
            ->with('meta', 'answers')
            ->first();
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
