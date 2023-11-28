<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use NotificationChannels\Telegram\TelegramMessage;

use Illuminate\Notifications\Slack\BlockKit\Blocks\ContextBlock;
use Illuminate\Notifications\Slack\BlockKit\Blocks\SectionBlock;
use Illuminate\Notifications\Slack\BlockKit\Composites\ConfirmObject;
use Illuminate\Notifications\Slack\SlackMessage;

class RegistrationNotification extends Notification
{

    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['slack', 'telegram'];
    }

    /**
     * Get the Slack representation of the notification.
     */
    public function toSlack(object $notifiable): SlackMessage
    {
        return (new SlackMessage)
            ->headerBlock('A new user has registered!')
            ->SectionBlock(function (SectionBlock $block) use ($notifiable) {
            $block->field("*User #:*\n$notifiable->id")->markdown();
            $block->field("*New User:*\n$notifiable->email")->markdown();
        });
    }

    public function toTelegram($notifiable)
    {
        return TelegramMessage::create()
            ->to(env('TELEGRAM_REGISTRATION_CHAT_ID'))
            ->content("New user: $notifiable->email");
    }
}
