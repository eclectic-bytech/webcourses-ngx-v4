<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\AngularController;
use App\Http\Controllers\User\RedirectController;

use App\Http\Controllers\PublisherAdmin\CoursePAController;

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

// Any route beginning with /webcourses is answered with angular.blade.php, which
// is just a copy of the index.html generated by Angular compilation process.
Route::any('/{any}', [AngularController::class, 'index'])->where('any', '^(webcourses).*$');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//Added after moving /dashboard to /user/dashboard to fix issue #60
Route::get('/dashboard', function () {
    return redirect('user/dashboard');
});

Route::group(['prefix' => 'user'], function() {
    Route::get('/redirect', [RedirectController::class, 'user_login_redirect']);
    Route::middleware(['auth:sanctum'])->get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

// All WNGX (Angular) end-points belong down this rabbit hole
Route::group(['prefix' => 'v4'], function() {
    require base_path('routes/wngx/v4/wngx.php');
});
