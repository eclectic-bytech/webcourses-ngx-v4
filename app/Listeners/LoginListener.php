<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Location;

class LoginListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        function getCountryCode()
        {
            if ($position = Location::get()) {
                // Successfully retrieved position.
                return $position->countryCode;
            }
        }
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $event->user->update([
            'last_login_time' => now(),
            'last_login_ip' => request()->GetClientIp(),
            'login_count' => $event->user->increment('login_count'),
            'country' => getCountryCode(),
        ]);
    }
}
