<?php

namespace App\Listeners;

use Laravel\Cashier\Events\WebhookReceived;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use App\Models\Coupon;
use App\Models\Sale;

class StripeEventListener
{
    /**
     * Handle received Stripe webhooks.
     *
     * @param  \Laravel\Cashier\Events\WebhookReceived  $event
     * @return void
     */
    public function handle(WebhookReceived $event)
    {

        if ($event->payload['type'] === 'charge.succeeded') {

            $sale = Sale::where('payment_intent', $event->payload['data']['object']['payment_intent'])->first();
            $sale->charge_object = $event->payload;
            $sale->save();

            if ($sale->service === 'course') {
                grantAccess($sale->cid, $sale->uid);
            } elseif ($sale->type === 'access_code') {
                Log::channel('daily')->info("Create access code.");
            } else {
                Log::channel('daily')->info("Unknown product type purchased by user.");
            }

            Log::channel('daily')->info("Get UID:" . $sale->uid . " access to CID:" . $sale->cid . ".");
            // $coupon = new Coupon();
            // $coupon->id = md5($event->payload['request']['id']);
            // $coupon->code = $event->payload['request']['id'];
            // $coupon->active = 1;
            // $coupon->label = "MD5 TESTER CODE LABEL";
            // $coupon->discount = 0;
            // $coupon->cid = 407;
            // $coupon->gid = 1;
            // $coupon->expiry = "2038-01-19 00:00:00";
            // $coupon->uses = 0;
            // $coupon->uses_max = 3;
            // $coupon->save();
        } else {
            Log::channel('daily')->alert("Payment failed, or something.");
        }

    }
}
