<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\UserController;
use App\Http\Controllers\UserCourseController;

require base_path('routes/wngx/v4/guest.php');

Route::get('user/profile', [UserController::class, 'loggedInUser']);

Route::middleware('is_user')->group(function() {

    require base_path('routes/wngx/v4/user.php');
    require base_path('routes/wngx/v4/commerce.php');

    Route::prefix('admin')->group(function() {
        require base_path('routes/wngx/v4/system.php');
        require base_path('routes/wngx/v4/publisher.php');
    });

});

