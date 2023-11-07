<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ChapterController;
use App\Http\Controllers\PublisherController;
use App\Http\Controllers\CourseController;

Route::resource('/webcourse/{cid}/chapters', ChapterController::class)->whereNumber('cid')->only(['index']);
Route::resource('publisher/profile', PublisherController::class)->name('show', 'pub-profile')->only(['show']);

// Paths grouped /v4/catalogue: Web course catalogues
Route::group(['prefix' => 'catalogue'], function() {
    Route::get('/', [CourseController::class, 'index']);
    Route::get('/publisher/{publisherId?}', [CourseController::class, 'index']);
    Route::get('/course/{cid}', [CourseController::class, 'course'])->whereNumber('cid');
});
