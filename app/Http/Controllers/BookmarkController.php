<?php

namespace App\Http\Controllers;

use App\Models\CourseSyllabus;
use App\Models\ActivityBookmark;
use App\Models\UserProgress;
use Illuminate\Http\Request;
use Carbon\Carbon;

class BookmarkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($aid)
    {
        $output = $aid;
        if (is_array($output))
            $output = implode(',', $output);

        echo "$output";

        $user = auth()->user();
        $pid = UserProgress::where('user_id',$user->id)->where('selected_aid',$aid)->first();

        $bookmark = new ActivityBookmark();
        $bookmark->aid = $aid;
        $bookmark->pid = $pid->id;
        $bookmark->save();
    }
}
