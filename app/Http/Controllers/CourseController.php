<?php

namespace App\Http\Controllers;

use App\Models\Course;
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
        return Course
            ::where('published', 1)
            ->where('private', 0)
            ->when($publisherId, function($query, $publisherId) {
                return $query->where('publisher_id', $publisherId);
            })
            ->with(['publisher', 'theme'])
            ->withCount('courseSyllabus as total_activities')
            ->withCount('participants as total_students')
            ->when($userIsLoggedIn, function($query) {
                return $query->withCount(
                    ['userAnswers as total_activities_completed' => function($q) {
                        $q->select(DB::raw('count(distinct(activity_id))'));
                    }]
                );
            })
            ->when($userIsLoggedIn, function($query) {
                return $query->with('UserProgress');
            })
            ->get();
    }


    public function indexUser($userId = false)
    {
        // Passed userId is intended for admin seeing what courses a user has access to.
        // Currently unused, added as documentation for future features.
        // return Course
        return Course
            ::where('courses.published', 1)
            ->where('courses.private', 0)
            ->whereHas('UserProgress')
            ->withCount('courseSyllabus as total_activities')
            ->withCount(['userAnswers as total_activities_completed' =>
                function($q) {
                    $q->select(DB::raw('count(distinct(activity_id))'));
                }
            ])
            ->withCount('participants as total_students')
            ->with(['publisher', 'theme', 'UserProgress'])
            ->get();
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
