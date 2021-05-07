<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\AngularController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::any('/{any}', [AngularController::class, 'index'])
//   ->where('any', '^(?!api).*$')
//   ->where('any', '^(?!user).*$')
//   ->where('any', '^(?!dashboard).*$')
//   ->where('any', '^(?!teams).*$')
// ;
// Route::any('/webcourse', [AngularController::class, 'index']);

// THIS IS THE ONE WE'VE KINDA WORKING SO FAR...
Route::any('/{any}', [AngularController::class, 'index'])->where('any', '^(webcourses).*$');

// SAME AS ABOVE, BUT ONLY LOGGED IN USERS CAN ACCESS. OTHERS ARE REDIRECTED TO LOGIN.
// Route::middleware(['auth:sanctum', 'verified'])->any('/{any}', [AngularController::class, 'index'])->where('any', '^(webcourses).*$');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth:sanctum', 'verified'])->get('/user/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
