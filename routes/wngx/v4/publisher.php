<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\CouponController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CodesUseController;
use App\Http\Controllers\UserAnswerController;
use App\Http\Controllers\CourseEditorController;

// Paths grouped as /v4/admin/publisher
Route::group(['prefix' => 'publisher'], function() {

    // Lists courses and their access codes
    Route::get('/coupons/{cid?}', [CouponController::class, 'index']);

    // Lists all users that applied a code
    Route::get('/access-codes/{code_id}/users', [CodesUseController::class, 'access_code_users']);

    Route::get('/courses', [CourseController::class, 'publisherCourses']);
    Route::get('/course/user-progress/{pid}', [UserAnswerController::class, 'user_answer_full_report']);
    Route::put('/course-editor/syllabus/{aid}/demo', [CourseEditorController::class, 'demo']);

});
