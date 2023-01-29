<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\AngularController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserCourseController;
use App\Http\Controllers\PublisherController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\UserAnswerController;
use App\Http\Controllers\UserRedirectController;
use App\Http\Controllers\SyllabusController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\CourseEditorController;

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

    Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::group(['prefix' => 'v4'], function() {

    // Paths grouped /v4/catalogue: Web course catalogues
    Route::group(['prefix' => '/catalogue'], function() {
        Route::get('/', [CourseController::class, 'index']);
        Route::get('/publisher/{publisherId?}', [CourseController::class, 'index']);
        Route::get('/user/{userId?}', [CourseController::class, 'indexUser'])->whereNumber('userId');
        Route::get('/course/{cid}', [CourseController::class, 'course'])->whereNumber('cid');
    });

    // Paths grouped as /v4/user
    Route::group(['prefix' => 'user', 'auth:sanctum' => 'verified'], function() {

        // Paths grouped as /v4/user/profile
        Route::group(['prefix' => 'profile'], function() {
            Route::get('/', [UserController::class, 'loggedInUser']);
            Route::post('/user_name', [UserController::class, 'save_name']);
        });

        // Paths grouped as /v4/user/course
        Route::group(['prefix' => 'course'], function() {
            Route::get('/{pid?}/resume', [UserCourseController::class, 'start_aid']);
        });

        // Paths grouped as /v4/user/courses
        Route::group(['prefix' => 'courses'], function() {

            // Catalogue of courses where the user is a participant
            Route::get('/', [UserCourseController::class, 'index']);

            // User's web courses progress: Unused?
            // Route::get('/progress', [UserCourseController::class, 'indexWithCourse']);

        });

    });

    // Paths grouped as /v4/webcourse
    Route::group(['prefix' => 'webcourse', 'auth:sanctum' => 'verified'], function() {
        Route::get('/{cid}/chapters', [CourseController::class, 'chapterIndex']);

        Route::get('/activities/{aid?}', [SyllabusController::class, 'activity_set']);
        Route::get('/activities/help/{type?}', [ActivityController::class, 'help']);
        Route::post('/activities/{aid}/user_answer', [UserAnswerController::class, 'save_user_answer']);

        Route::get('/chapter/{chid}', [ChapterController::class, 'chapter']);
        Route::get('/chapter/{chid}/user_answer_count', [UserAnswerController::class, 'total_user_answers_in_chapter']);
    });

    // Paths grouped as /v4/publisher
    Route::group(['prefix' => 'publisher'], function() {
        Route::get('/profile/{id}', [PublisherController::class, 'index']);
    });

    // Paths grouped as /v4/coupon
    Route::group(['prefix' => 'coupon'], function() {
        Route::get('/course/{cid}/apply/{coupon}', [CouponController::class, 'applyPublicCourseCoupon']);
        Route::get('/course/group/apply/{coupon}', [CouponController::class, 'applyPrivateCourseCoupon']);
    });

    // Paths grouped as /v4/admin
    Route::group(['prefix' => 'admin'], function() {
        // Paths grouped as /v4/admin/publisher
        Route::group(['prefix' => 'publisher'], function() {
            Route::get('/coupons', [CouponController::class, 'index']);

            // Paths grouped as /v4/admin/publisher/course-editor
            Route::group(['prefix' => 'course-editor'], function() {

                Route::put('/syllabus/{aid}/demo', [CourseEditorController::class, 'demo']);

            });

        });
    });

});
