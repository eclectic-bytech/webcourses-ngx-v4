<?php

namespace App\Listeners;

use Laravel\Cashier\Events\WebhookReceived;
use Illuminate\Support\Facades\Log;

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
        Log::channel('daily')->debug('Evalis waz here');
        if ($event->payload['type'] === 'charge.succeeded') {
            Log::channel('daily')->debug('Evalis waz here, 2');
        }
        Log::channel('daily')->debug($event->payload);
    }
}
