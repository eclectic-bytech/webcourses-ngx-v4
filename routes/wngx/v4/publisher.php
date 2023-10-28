<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\CouponController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CodesUseController;
use App\Http\Controllers\UserAnswerController;
use App\Http\Controllers\CourseEditorController;
use App\Http\Controllers\PublisherAdmin\CoursePAController;

// Paths grouped as /v4/admin/publisher
Route::group(['prefix' => 'publisher'], function() {

    Route::group(['prefix' => 'access-codes'], function() {
        // Lists courses with associated access codes
        Route::get('/{cid?}', [CouponController::class, 'index']);
        // Lists all users that applied a code
        Route::get('/{code_id}/users', [CodesUseController::class, 'access_code_users']);
    });

    Route::get('/course/{cid}', [CoursePAController::class, 'course']);
    Route::get('/courses', [CourseController::class, 'publisherCourses']);
    Route::put('/course-editor/syllabus/{aid}/demo', [CourseEditorController::class, 'demo']);

    Route::group(['prefix' => 'course'], function() {
        Route::post('/', [CoursePAController::class, 'new_course']);
        Route::patch('/edit/{cid?}', [CoursePAController::class, 'edit_course']);
        Route::delete('/{cid}', [CoursePAController::class, 'delete_course']);
        Route::get('/user-progress/{pid}', [UserAnswerController::class, 'user_answer_full_report']);
    });

});
