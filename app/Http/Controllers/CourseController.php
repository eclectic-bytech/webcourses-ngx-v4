<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Publisher;
use Illuminate\Http\Request;
use DB;

class CourseController extends Controller
{
    /**
     * Display a listing of published and public courses.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($publisherId = false)
    {
        $userIsLoggedIn = auth()->check();
        $publisherId = ($publisherId) ? publisherIntId($publisherId) : false;

        return Course
            ::where('published', 1)
            ->where('private', 0)
            ->when(!$publisherId, function($query){
                return $query->where('hide_from_main_catalogue', 0);
            })
            ->when($publisherId, function($query, $publisherId) {
                return $query->where('publisher_id', $publisherId);
            })
            ->with(['publisher'])
            ->withCount('courseSyllabus as total_activities')
            ->withCount('participants as total_students')
            ->when($userIsLoggedIn, function($query) {
                return $query->with('UserProgress');
            })
            ->get();
    }

    public function publisherCourses()
    {
        $uid = auth()->user()->id;
        $publisher = Publisher::where('owner_uid', $uid)->first();

        return Course
            ::where('publisher_id', $publisher['id'])
            ->withCount('courseSyllabus as total_activities')
            ->withCount('participants as total_students')
            ->withCount('accessCodes as access_codes')
            ->get();
    }


    public function indexUser($userId = false)
    {
        // Passed userId is intended for admin seeing what courses a user has access to.
        // Currently unused, added as documentation for future features.
        return Course
            ::where('courses.published', 1)
            ->whereHas('UserProgress')
            ->withCount('courseSyllabus as total_activities')
            ->withCount('participants as total_students')
            ->with(['publisher'])
            ->when(auth()->check(), function($query) {
                return $query->with('userProgress');
            })
            ->get();
    }


    public function course($cid) {
        // Course details page
        $course = Course
            ::where('courses.id', $cid)
            ->where('courses.published', 1)
            ->with(['publisher'])
            ->when(auth()->check(), function($query) {
                return $query->with('userProgress');
            })
            ->withCount('courseSyllabus as total_activities')
            ->withCount('participants as total_students')
            ->first();

        $course = json_decode($course);
        // If course is private, check if user has access before giving its details
        if ($course->private === 1) {
            return (isset($course->user_progress)) ? $course : null;
        }
        return $course;
    }

    public function chapterIndex($cid)
    {
      $course = Course
            ::where('id', $cid)
            ->with('chapterIndex')
            ->first();

        $course = json_decode($course);
        return $course->chapter_index;
    }

    public function new_course(Request $request) {
        $uid = auth()->user()->id;
        $publisher = Publisher::where('owner_uid', $uid)->first();
        $input = $request->input();

        $course = new Course();

        $course->active_bid = 1;
        $course->title = $input['title'];
        $course->publisher_id = $publisher['id'];
        $course->published = 0;
        $course->private = $input['private'] ? 1 : 0;
        $course->hide_from_main_catalogue = 0;
        $course->completion_time = null;
        $course->audience = $input['audience'];
        $course->short_desc = $input['short_desc'];
        $course->long_desc = $input['long_desc'];
        $course->objective = $input['objective'];
        $course->eval_type = $input['eval_type'];
        $course->price = $input['price'] * 100;

        $course->save();

        return $input;
    }

    public function edit_course(Request $request, $cid) {
        $uid = auth()->user()->id;
        $publisher = Publisher::where('owner_uid', $uid)->first();
        $course = Course::withCount('participants as total_students')->find($cid);

        if ( $course->publisher_id === $publisher->id ) {

            $validatedData = $request->validate([
                'title' => ['required', 'min:16', 'max:128'],
                'short_desc' => ['required', 'min:32', 'max:256'],
                'private' => 'boolean',
                'audience' => '',
                'long_desc' => '',
                'objective' => '',
                'eval_type' => 'in:"Online", "Instructor", "Online + Instructor", ""',
                'price' => ['required', 'integer', 'min:0', 'max:99999']
            ]);

            $course->update($validatedData);

            return $course;
        }

        abort(403, 'Unauthorised');
    }

    public function delete_course($cid) {
        $uid = auth()->user()->id;
        $publisher = Publisher::where('owner_uid', $uid)->first();

        $course = Course
            ::where('id', $cid)
            ->withCount('participants as total_students')
            ->first();

        if (
            $publisher['id'] === $course['publisher_id']
            && $course['total_students'] === 0
        ) {
            return Course::find($cid)->delete();
        }

        return 0;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CourseCatalogue  $courseCatalogue
     * @return \Illuminate\Http\Response
     */
    public function show(CourseCatalogue $courseCatalogue)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CourseCatalogue  $courseCatalogue
     * @return \Illuminate\Http\Response
     */
    public function edit(CourseCatalogue $courseCatalogue)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CourseCatalogue  $courseCatalogue
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CourseCatalogue $courseCatalogue)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CourseCatalogue  $courseCatalogue
     * @return \Illuminate\Http\Response
     */
    public function destroy(CourseCatalogue $courseCatalogue)
    {
        //
    }
}
