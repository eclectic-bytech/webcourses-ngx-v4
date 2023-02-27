<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('codes_uses', function (Blueprint $table) {
            $table->id();
            $table->string('code_id',32)->comment('MD5 hash of course access code');
            $table->integer('user_progress_id')->unsigned();
            $table->timestamps();
            $table->foreign('user_progress_id')
                ->references('id')->on('user_progress')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreign('code_id')
                ->references('id')->on('coupons')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('codes_uses');
    }
};
