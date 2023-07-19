<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\AngularController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserCourseController;
use App\Http\Controllers\PurchaseOrderController;
use App\Http\Controllers\PublisherController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\UserAnswerController;
use App\Http\Controllers\UserRedirectController;
use App\Http\Controllers\SyllabusController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\CourseEditorController;
use App\Http\Controllers\CodesUseController;
use App\Http\Controllers\UserProgressController;
use App\Http\Controllers\BookmarkController;

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
    Route::get('/redirect', [UserRedirectController::class, 'user_login_redirect']);
    Route::middleware(['auth:sanctum'])->get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::group(['prefix' => 'v4'], function() {

    // Paths grouped /v4/catalogue: Web course catalogues
    Route::group(['prefix' => '/catalogue'], function() {
        Route::get('/', [CourseController::class, 'index']);
        Route::get('/publisher/{publisherId?}', [CourseController::class, 'index']);
        Route::middleware(['auth:sanctum'])->get('/user/{userId?}', [CourseController::class, 'indexUser'])->whereNumber('userId');
        Route::get('/course/{cid}', [CourseController::class, 'course'])->whereNumber('cid');
    });

    Route::group(['prefix' => '/purchase'], function() {
        Route::get('/course/{cid}', [PurchaseOrderController::class, 'purchase_course']);
    });

    // Paths grouped as /v4/user
    Route::prefix('user')->group(function() {

        // Paths grouped as /v4/user/profile
        Route::group(['prefix' => 'profile'], function() {
            Route::get('/', [UserController::class, 'loggedInUser']);
            Route::post('/user_name', [UserController::class, 'save_name']);
        });


    });

    // Paths grouped as /v4/webcourse
    Route::middleware(['auth:sanctum'])->prefix('webcourse')->group(function() {
        Route::get('/access-code/{code_hash}', [CouponController::class, 'applyAccessCode']);
        Route::get('/{cid}/chapters', [CourseController::class, 'chapterIndex']);
        Route::get('/{cid}/bookmarks', [BookmarkController::class, 'bookmark_Index']);

        Route::group(['prefix' => '/activities'], function() {
          Route::get('/{aid?}', [SyllabusController::class, 'activity_set']);
          Route::get('/special/before-and-after/{aid}', [ActivityController::class, 'before_and_after_activity']);
          Route::get('/special/completion-cert/{pid}', [UserProgressController::class, 'completion_cert']);
          Route::get('/help/{type?}', [ActivityController::class, 'help']);
          Route::post('/{aid}/user_answer', [UserAnswerController::class, 'save_user_answer']);
          Route::post('/bookmark/{aid}/create', [BookmarkController::class, 'bookmark_create']);
          Route::delete('/bookmark/{aid}/delete', [BookmarkController::class, 'bookmark_delete']);
        });

        Route::get('/chapter/{chid}', [ChapterController::class, 'chapter']);
        Route::get('/chapter/{chid}/user_answer_count', [UserAnswerController::class, 'total_user_answers_in_chapter']);
    });

    // Paths grouped as /v4/publisher
    Route::group(['prefix' => 'publisher'], function() {
        Route::get('/profile/{id}', [PublisherController::class, 'index']);
    });

    // Paths grouped as /v4/admin
    Route::middleware(['auth:sanctum'])->prefix('admin')->group(function() {

        // Paths gruped as /v4/admin/system
        Route::middleware(['is_admin'])->prefix('system')->group(function() {
            Route::get('recent-code-uses', [CouponController::class, 'recent_code_uses']);
            Route::get('recent-logins', [UserController::class, 'recent_logins']);
        });

        // Paths grouped as /v4/admin/publisher
        Route::group(['prefix' => 'publisher'], function() {

            // Lists courses and their access codes
            Route::get('/coupons', [CouponController::class, 'index']);

            // Paths grouped as /v4/admin/publisher/access-codes
            Route::group(['prefix' => 'access-codes'], function() {
                // returns Course for code_id
                Route::get('/{code_id}/course', [CodesUseController::class, 'access_code_course']);
                // Lists all users that applied a code
                Route::get('/{code_id}/users', [CodesUseController::class, 'access_code_users']);
            });

            // Paths grouped as /v4/admin/publisher/course
            Route::group(['prefix' => 'course'], function() {
                Route::get('/user-progress/{pid}', [UserAnswerController::class, 'user_answer_full_report']);
            });

            // Paths grouped as /v4/admin/publisher/course-editor
            Route::group(['prefix' => 'course-editor'], function() {
                Route::put('/syllabus/{aid}/demo', [CourseEditorController::class, 'demo']);
            });

        });
    });

});
