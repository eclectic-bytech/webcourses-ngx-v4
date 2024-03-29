<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\User\CouponUserController;
use App\Http\Controllers\Commerce\SaleCommerceController;

Route::group(['prefix' => 'commerce'], function() {
    Route::get('/stripe/charge/{amount}', [CouponUserController::class, 'checkout']);
    Route::get('/stripe/checkout/course/{id}', [SaleCommerceController::class, 'course']);
});
