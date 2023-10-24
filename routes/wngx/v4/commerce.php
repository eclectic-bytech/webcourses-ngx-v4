<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PurchaseOrderController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\SaleController;

Route::group(['prefix' => '/purchase'], function() {
    Route::get('/course/{cid}', [PurchaseOrderController::class, 'purchase_course']);
});

Route::group(['prefix' => 'commerce'], function() {
    Route::get('/stripe/charge/{amount}', [CouponController::class, 'checkout']);
    Route::get('/stripe/checkout/course/{id}', [SaleController::class, 'course']);
});
