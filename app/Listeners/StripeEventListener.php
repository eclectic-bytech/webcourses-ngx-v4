<?php

namespace App\Listeners;

use Laravel\Cashier\Events\WebhookReceived;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Model;
use App\Models\Coupon;

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
            Log::channel('daily')->debug('First save of a coupon =)');
            $coupon = new Coupon();
            $coupon->id = md5($event->payload['request']['id']);
            $coupon->code = $event->payload['request']['id'];
            $coupon->active = 1;
            $coupon->label = "MD5 TESTER CODE LABEL";
            $coupon->discount = 0;
            $coupon->cid = 407;
            $coupon->gid = 1;
            $coupon->expiry = "2038-01-19 00:00:00";
            $coupon->uses = 0;
            $coupon->uses_max = 3;
            $coupon->save();
        }
    }
}
