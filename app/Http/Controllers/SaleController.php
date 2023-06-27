<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use App\Models\Sale;
use Stripe\Charge;
use Stripe\StripeClient;

class SaleController extends Controller
{
    public function course($id) {
        \Stripe\Stripe::setApiKey( env('STRIPE_SECRET') );

        $checkout_session = \Stripe\Checkout\Session::create([
            'line_items' => [[
                'price' => env('CID_'.$id),
                'quantity' => 1,
            ]],
            'automatic_tax' => [ 'enabled' => true ],
            'mode' => 'payment',
            'success_url' => env('APP_URL') . '/webcourses/user/webcourses',
            'cancel_url' => env('APP_URL') . '/webcourses/user/webcourses'
        ]);

        $sale = new Sale;

        $sale->uid = auth()->user()->id;
        $sale->service = 'course';
        $sale->cid = $id;
        $sale->quantity = 1;
        $sale->payment_intent = $checkout_session->payment_intent;

        $sale->save();

        return json_encode($checkout_session->url);
    }
}
