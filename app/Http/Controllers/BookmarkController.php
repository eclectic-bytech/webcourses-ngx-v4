<?php

namespace App\Http\Controllers;

use App\Models\CourseSyllabus;
use Illuminate\Http\Request;

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
    }
}
