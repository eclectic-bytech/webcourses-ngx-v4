<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ChapterController;
use App\Http\Controllers\PublisherController;
use App\Http\Controllers\CourseController;

Route::resource('/webcourse/{cid}/chapters', ChapterController::class)->whereNumber('cid')->only(['index']);
Route::resource('/catalogue', CourseController::class)->only(['index', 'show']);

// If not named, below route will break /user/profile due to clash with Livewire default naming. Why?
Route::resource('/publisher/profile', PublisherController::class)->name('show', 'pub-profile')->only(['show']);
