<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publisher extends Model
{
    protected $hidden = ['owner_uid'];
    protected $casts = ["settings" => "array"];

    use HasFactory;

    public function theme() {
        return $this->hasOne(Theme::class, 'publisher_id', 'id');
    }

}
