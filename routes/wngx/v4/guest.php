<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ChapterController;
use App\Http\Controllers\PublisherController;
use App\Http\Controllers\CourseController;

Route::resource('/webcourse/{cid}/chapters', ChapterController::class)->whereNumber('cid')->only(['index']);
Route::resource('/publisher/profile', PublisherController::class)->only(['show']);
Route::resource('/catalogue', CourseController::class)->only(['index', 'show']);
