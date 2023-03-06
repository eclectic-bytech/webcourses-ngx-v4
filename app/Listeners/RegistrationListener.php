<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use app\Notifications\RegistrationNotification;

class RegistrationListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        RegistrationNotification::class;
    //     $userName = ($event->user->name);
    //     $user = ($event->user);

    //     $user->notify(new RegistrationNotification($userName));
    }
}
