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
        $aid = (int)$aid; // Cast to int, else $bookmark->aid will be string

        $course = CourseSyllabus::where('activity_id', $aid)->first()->course_id;
        $pid = UserProgress::where('user_id', resolve('uid'))->where('course_id',$course)->first()->id;
        $activity = Activity::where('id',$aid)->first();
        $label = (strip_tags($activity->prequestion)) ? strip_tags($activity->prequestion) : 'No description';

        $bookmark = new Bookmark();
        $bookmark->aid = $aid;
        $bookmark->pid = $pid;
        $bookmark->label = $label;
        $bookmark->save();

        return $bookmark;
    }

    /**
     * deletes selected bookmark instance on the bookmark table
     */
    public function bookmark_delete($aid)
    {
        $course = CourseSyllabus::where('activity_id', $aid)->first()->course_id;
        $pid = UserProgress::where('user_id', resolve('uid'))->where('course_id',$course)->first()->id;
        Bookmark::where('pid',$pid)->where('aid',$aid)->first()->delete();
    }

    /**
     * returns a list of bookmarks
     */
    public function bookmark_Index($cid)
    {
        $pid = UserProgress::where('user_id', resolve('uid'))->where('course_id', $cid)->first()->id;
        return Bookmark::where('pid', $pid)->orderBy('aid', 'asc')->get();
    }
}
