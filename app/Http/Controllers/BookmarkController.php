<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\UserProgress;
use App\Models\Activity;
use App\Models\CourseSyllabus;
use Illuminate\Http\Request;
use Carbon\Carbon;

class BookmarkController extends Controller
{
    /**
     * creates a new bookmark instance on the bookmark table
     */
    public function bookmark_create($aid)
    {
        $user = auth()->user();
        $course = CourseSyllabus::where('activity_id', $aid)->first()->course_id;
        $pid = UserProgress::where('user_id',$user->id)->where('course_id',$course)->first()->id;
        $activity = Activity::where('id',$aid)->first();
        $label = strip_tags($activity->prequestion);
            $bookmark = new Bookmark();
            $bookmark->aid = $aid;
            $bookmark->pid = $pid;
            $bookmark->label = $label;
            $bookmark->save();
    }

    /**
     * deletes selected bookmark instance on the bookmark table
     */
    public function bookmark_delete($aid)
    {
        $user = auth()->user();
        $course = CourseSyllabus::where('activity_id', $aid)->first()->course_id;
        $pid = UserProgress::where('user_id',$user->id)->where('course_id',$course)->first()->id;
        Bookmark::where('pid',$pid)->where('aid',$aid)->first()->delete();
    }

    /**
     * returns a list of bookmarks
     */
    public function bookmark_Index($cid)
    {
        $user = auth()->user();
        $pid = UserProgress::where('user_id', $user->id)->where('course_id', $cid)->first()->id;
        return Bookmark::where('pid', $pid)->orderBy('aid', 'asc')->get();
    }
}
