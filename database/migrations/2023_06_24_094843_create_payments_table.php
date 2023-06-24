<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('uid');
            $table->string('service', 32);
            $table->mediumInteger('cid')->unsigned()->nullable();
            $table->unsignedSmallInteger('quantity')->default(1);
            $table->string('payment_intent', 255);
            $table->json('charge_object');
            $table->timestamps();

            $table->foreign('uid')->references('id')->on('users');
            $table->foreign('cid')->references('id')->on('courses');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
