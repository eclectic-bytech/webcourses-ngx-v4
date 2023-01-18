<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    use HasFactory;

    public function course() {
        return $this->hasOne(Course::class, 'id', 'cid');
    }

    public function publisher() {
        return $this->hasOneThrough(
            Publisher::class,
            Course::class,
            'publisher_id',
            'id',
            'cid',
            'id'
        );
    }
}
