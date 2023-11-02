<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PublisherAdmin\CouponPAController;
use App\Http\Controllers\CodesUseController;
use App\Http\Controllers\UserAnswerController;
use App\Http\Controllers\CourseEditorController;
use App\Http\Controllers\PublisherAdmin\CoursePAController;

// Paths grouped as /v4/admin/publisher
Route::middleware('is_publisher')->prefix('publisher')->group(function() {

    Route::resource('/access-codes', CouponPAController::class)->only(['index']);
    Route::get('/access-codes/{code_id}/users', [CodesUseController::class, 'access_code_users']);

    Route::resource('/courses', CoursePAController::class)->except(['create', 'edit']);
    Route::put('/course-editor/syllabus/{aid}/demo', [CourseEditorController::class, 'demo']);

    Route::group(['prefix' => 'course'], function() {
        Route::get('/user-progress/{pid}', [UserAnswerController::class, 'user_answer_full_report']);
    });

});
