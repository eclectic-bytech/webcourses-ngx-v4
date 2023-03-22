<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Http\Controllers\LocationController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

class LoginListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $userIp = '89.151.39.138';//$request->ip();
        $locationData = \Location::get($userIp);
        $event->user->update([
            'last_login_time' => now(),
            'last_login_ip' => request()->GetClientIp(),
            'login_count' => $event->user->increment('login_count'),
            'country' => $locationData->countryCode,
        ]);
    }
}
