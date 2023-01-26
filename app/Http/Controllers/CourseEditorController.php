<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Publisher;

class CourseEditorController extends Controller
{
    public function demo($aid) {
        $uid = auth()->user()->id;

        // get user's publisher id
        $pub_id = Publisher::where('owner_uid', $uid)->first()->id;

        // if ($pub_id) {

        // }

        return json_encode($pub_id);
    }
}
