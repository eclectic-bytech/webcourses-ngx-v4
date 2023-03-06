<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

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
    public function incrementLoginCount($event) {
        $UserID = ($event->user->id);
        $event->user::find($UserID)->increment('login_count');
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
            'login_count' => $this->incrementLoginCount($event)
        ]);
    }
}
