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
        $user = auth()->user();
        $pid = UserProgress::where('user_id',$user->id)->where('selected_aid',$aid)->first()->id;

        $isBookmarked = ActivityBookmark::where('pid',$pid)->where('aid',$aid)->first() || null;

        if ($isBookmarked == null){
            $bookmark = new ActivityBookmark();
            $bookmark->aid = $aid;
            $bookmark->pid = $pid;
            $bookmark->save();
        }else{
            ActivityBookmark::where('pid',$pid)->where('aid',$aid)->first()->delete();
        }
    }
}
