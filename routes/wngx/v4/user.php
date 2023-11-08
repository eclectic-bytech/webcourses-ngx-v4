<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\UserController;
use App\Http\Controllers\User\CouponUserController;
use App\Http\Controllers\User\BookmarkUserController;
// use App\Http\Controllers\SyllabusController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\UserProgressController;
use App\Http\Controllers\UserAnswerController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\User\UserRoleUserController;
use App\Http\Controllers\User\CourseUserController;

Route::prefix('user')->group(function() {
    Route::resource('courses', CourseUserController::class)->only(['index']);
    Route::resource('role', UserRoleUserController::class)->only(['store']);
    Route::post('/profile/user_name', [UserController::class, 'save_name']);
});

// Paths grouped as /v4/webcourse
Route::prefix('webcourse')->group(function() {

    Route::resource('activities', ActivityController::class)->middleware('is_student')->only(['show']);
    Route::get('/access-code/{code_hash}', [CouponUserController::class, 'applyAccessCode']);

    Route::prefix('activities')->group( function() {
        Route::resource('/bookmarks', BookmarkUserController::class)->only(['store', 'destroy', 'index']);
        // Route::get('/{aid?}', [SyllabusController::class, 'activity_set']);
        Route::get('/special/before-and-after/{aid}', [ActivityController::class, 'before_and_after_activity']);
        Route::get('/special/completion-cert/{pid}', [UserProgressController::class, 'completion_cert']);
        Route::get('/help/{type?}', [ActivityController::class, 'help']);
        Route::post('/{activity}/user_answer', [UserAnswerController::class, 'save_user_answer'])->middleware('is_student');
    });

    Route::get('/chapter/{chid}', [ChapterController::class, 'chapter']);
    Route::get('/chapter/{chid}/user_answer_count', [UserAnswerController::class, 'total_user_answers_in_chapter']);

});
