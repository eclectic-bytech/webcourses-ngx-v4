<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\SlackMessage;
use NotificationChannels\Telegram\TelegramMessage;
use App\Models\Course;

class AccessGrantedNotification extends Notification
{
    use Queueable;


    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($cid)
    {
        $this->cid = $cid;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        $validChannels = [];

        if (env('SLACK_BOT_USER_OAUTH_TOKEN') && env('SLACK_BOT_USER_DEFAULT_CHANNEL')) {
            array_push($validChannels, 'slack');
        }

        if (env('TELEGRAM_BOT_TOKEN') && env('TELEGRAM_REGISTRATION_CHAT_ID')) {
            array_push($validChannels, 'telegram');
        }

        return $validChannels;
    }

    /**
     * Get the Slack representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\SlackMessage
     */
    public function toSlack($notifiable)
    {
        $course = Course::find($this->cid);
        return (new SlackMessage)
            ->text("$notifiable->email used an access code for course $course->title (#$course->id)");
    }

    public function toTelegram($notifiable)
    {
        $course = Course::find($this->cid);
        return TelegramMessage::create()
            ->to(env('TELEGRAM_ACCESS_GRANTED_CHAT_ID'))
            ->content("$notifiable->email used an access code for course $course->title (#$course->id)");
    }
}
