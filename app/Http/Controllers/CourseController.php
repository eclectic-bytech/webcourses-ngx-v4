<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

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
            ->when(!$publisherId, function($query) {
                return $query->with(['publisher', 'theme']);
            })
            ->when($userIsLoggedIn, function($query) {
                return $query->with('userProgress');
            })
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
