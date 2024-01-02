<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\UserController;
use App\Http\Controllers\User\CouponUserController;
use App\Http\Controllers\User\BookmarkUserController;
use App\Http\Controllers\User\ActivityUserController;
use App\Http\Controllers\ActivityTypeController;
use App\Http\Controllers\User\UserProgressUserController;
use App\Http\Controllers\User\UserAnswerUserController;
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
    Route::get('/access-code/{code_hash}', [CouponUserController::class, 'applyAccessCode']);

    Route::prefix('activities')->group(function()
    {
        // bookmarks is not part of is_student middleware group, because it requires an {aid} in the url
        Route::resource('bookmarks', BookmarkUserController::class)->only(['store', 'destroy', 'index']);
        Route::get('help/{type?}', [ActivityTypeController::class, 'help']);

        Route::middleware('is_student')->group( function()
        {
            Route::prefix('special')->group( function() {
                Route::get('completion-cert/{aid}', [UserProgressUserController::class, 'completion_cert']);
                Route::get('before-and-after/{aid}', [ActivityUserController::class, 'before_and_after_activity']);
            });
            Route::get('{aid}', [ActivityUserController::class, 'show']);
            Route::post('{aid}/user_answer', [UserAnswerUserController::class, 'save_user_answer']);
        });
    });

});
