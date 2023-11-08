<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\UserController;
use App\Http\Controllers\User\CouponUserController;
use App\Http\Controllers\User\BookmarkUserController;
use App\Http\Controllers\User\ActivityUserController;
use App\Http\Controllers\ActivityTypeController;
use App\Http\Controllers\UserProgressController;
use App\Http\Controllers\UserAnswerController;
use App\Http\Controllers\User\UserRoleUserController;
use App\Http\Controllers\User\CourseUserController;

Route::prefix('user')->group(function() {
    Route::resource('courses', CourseUserController::class)->only(['index']);
    Route::resource('role', UserRoleUserController::class)->only(['store']);
    Route::post('/profile/user_name', [UserController::class, 'save_name']);
});

// Paths grouped as /v4/webcourse
Route::prefix('webcourse')->group(function()
{
    Route::resource('activities', ActivityUserController::class)->middleware('is_student')->only(['show']);
    Route::get('/access-code/{code_hash}', [CouponUserController::class, 'applyAccessCode']);

    Route::prefix('activities')->group(function()
    {
        Route::resource('/bookmarks', BookmarkUserController::class)->only(['store', 'destroy', 'index']);
        Route::get('/help/{type?}', [ActivityTypeController::class, 'help']);

        Route::middleware('is_student')->group( function()
        {
            Route::post('/{activity}/user_answer', [UserAnswerController::class, 'save_user_answer']);
            Route::prefix('special')->group( function() {
                Route::get('completion-cert/{activity}', [UserProgressController::class, 'completion_cert']);
                Route::get('before-and-after/{activity}', [ActivityUserController::class, 'before_and_after_activity']);
            });
        });
    });

});
