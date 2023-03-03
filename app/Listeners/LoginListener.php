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


    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        function incrementLoginCount($login_count) {
            $this->User::find($login_count)->increment('login_count');
        }
        $event->user->update([
            'last_login_time' => now(),
            'last_login_ip' => request()->GetClientIp(),
            $login_count = ('login_count'),
            'login_count' => incrementLoginCount($login_count)
        ]);
    }
}
