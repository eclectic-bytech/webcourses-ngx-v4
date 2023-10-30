<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\CouponController;
use App\Http\Controllers\CodesUseController;
use App\Http\Controllers\UserAnswerController;
use App\Http\Controllers\CourseEditorController;
use App\Http\Controllers\PublisherAdmin\CoursePAController;

// Paths grouped as /v4/admin/publisher
Route::middleware('is_publisher')->prefix('publisher')->group(function() {
    Route::group(['prefix' => 'access-codes'], function() {
        // Lists course(s) with associated access codes
        Route::get('/{cid?}', [CouponController::class, 'index']);
        // Lists all users that applied a code
        Route::get('/{code_id}/users', [CodesUseController::class, 'access_code_users']);
    });

    Route::resource('/courses', CoursePAController::class)->except(['create', 'edit']);
    Route::put('/course-editor/syllabus/{aid}/demo', [CourseEditorController::class, 'demo']);

    Route::group(['prefix' => 'course'], function() {
        Route::get('/user-progress/{pid}', [UserAnswerController::class, 'user_answer_full_report']);
    });

});
