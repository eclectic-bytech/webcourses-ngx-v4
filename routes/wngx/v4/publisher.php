<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PublisherAdmin\CouponPAController;
use App\Http\Controllers\PublisherAdmin\CodesUsePAController;
use App\Http\Controllers\PublisherAdmin\CourseEditorController;
use App\Http\Controllers\PublisherAdmin\CoursePAController;

// Paths grouped as /v4/admin/publisher
Route::middleware('is_publisher')->prefix('publisher')->group(function() {

    Route::resource('access-codes', CouponPAController::class)->only(['index']);
    Route::resource('access-codes.users', CodesUsePAController::class)->only(['index']);

    Route::resource('/courses', CoursePAController::class)->except(['create', 'edit']);
    Route::put('/course-editor/syllabus/{aid}/demo', [CourseEditorController::class, 'demo']);

});
