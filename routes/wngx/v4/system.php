<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\SystemAdmin\CouponSAController;
use App\Http\Controllers\SystemAdmin\UserSAController;
use App\Http\Controllers\SystemAdmin\UserRoleSAController;

// Paths gruped as /v4/admin...
Route::middleware(['is_admin'])->prefix('system')->group(function() {
    Route::get('recent-code-uses', [CouponSAController::class, 'recent_code_uses']);
    Route::get('recent-logins', [UserSAController::class, 'recent_logins']);
    Route::get('publisher-interest', [UserRoleSAController::class, 'publisher_interest']);
});
