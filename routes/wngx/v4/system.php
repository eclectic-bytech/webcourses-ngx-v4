<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\CouponController;
use App\Http\Controllers\SystemAdmin\UserSAController;
use App\Http\Controllers\UserRoleController;

// Paths gruped as /v4/admin...
Route::middleware(['is_admin'])->prefix('system')->group(function() {
    Route::get('recent-code-uses', [CouponController::class, 'recent_code_uses']);
    Route::get('recent-logins', [UserSAController::class, 'recent_logins']);
    Route::get('publisher-interest', [UserRoleController::class, 'publisher_interest']);
});
