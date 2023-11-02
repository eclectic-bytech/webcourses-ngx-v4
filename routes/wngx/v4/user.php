<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\UserController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\SyllabusController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\UserProgressController;
use App\Http\Controllers\UserAnswerController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\UserRoleController;
use App\Http\Controllers\User\CourseUserController;

Route::prefix('user')->group(function() {

    Route::resource('/courses', CourseUserController::class)->only(['index']);
    Route::post('/profile/user_name', [UserController::class, 'save_name']);

    Route::group(['prefix' => 'role'], function() {
        Route::post('/interest-expressed', [UserRoleController::class, 'interest_expressed']);
        Route::post('/request-access', [UserRoleController::class, 'request_access']);
        Route::post('/builder-sub', [UserRoleController::class, 'builder_sub']);
    });

});

// Paths grouped as /v4/webcourse
Route::prefix('webcourse')->group(function() {

    Route::get('/access-code/{code_hash}', [CouponController::class, 'applyAccessCode']);
    Route::get('/{cid}/bookmarks', [BookmarkController::class, 'bookmark_Index']);

    Route::group(['prefix' => '/activities'], function() {
        Route::get('/{aid?}', [SyllabusController::class, 'activity_set']);
        Route::get('/special/before-and-after/{aid}', [ActivityController::class, 'before_and_after_activity']);
        Route::get('/special/completion-cert/{pid}', [UserProgressController::class, 'completion_cert']);
        Route::get('/help/{type?}', [ActivityController::class, 'help']);
        Route::post('/{aid}/user_answer', [UserAnswerController::class, 'save_user_answer']);
        Route::resource('/bookmark', BookmarkController::class)->only(['store', 'destroy']);
    });

    Route::get('/chapter/{chid}', [ChapterController::class, 'chapter']);
    Route::get('/chapter/{chid}/user_answer_count', [UserAnswerController::class, 'total_user_answers_in_chapter']);

});
