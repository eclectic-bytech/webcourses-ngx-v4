<?php

namespace App\Listeners;

use Laravel\Cashier\Events\WebhookReceived;
use IlluminateSupportFacadesLog;

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
        Log::info("Birds can't fly");

        if ($event->payload['type'] === 'charge.succeeded') {
            Log::info('Evalis waz here.');
        }
    }
}
