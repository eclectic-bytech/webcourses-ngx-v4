<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\SlackMessage;
use NotificationChannels\Telegram\TelegramMessage;

class AccessGrantedNotification extends Notification
{
    use Queueable;

    protected $cid;
    protected $ct;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($cid, $ct)
    {
        $this->cid = $cid;
        $this->ct = $ct;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['slack',"telegram"];
    }

    /**
     * Get the Slack representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\SlackMessage
     */
    public function toSlack($notifiable)
    {
        return (new SlackMessage)
        ->content("$notifiable->email Used A Coupon For Course #$this->cid $this->ct");
    }

    public function toTelegram($notifiable)
    {
        return TelegramMessage::create()
        ->to(env('TELEGRAM_ACCESS_GRANTED_CHAT_ID'))
            ->content("$notifiable->email Used A Coupon For Course #$this->cid $this->ct");
    }
}
