<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivityDefaultsTable extends Migration
{
    public function up()
    {
        Schema::create('activity_defaults', function (Blueprint $table) {

		$table->integer('activity_id')->unsigned()->comment('ID of activity which preloads an answer');
        $table->tinyInteger('source')->unsigned()
            ->comment('1 - Source of default answer is activity_default_answers table; 2 - source is id from user_long_answers');
		$table->integer('id')->unsigned()->comment('Primary id of default answer');
		$table->primary('activity_id');
        $table->foreign('activity_id')
            ->references('id')->on('activities')
            ->onUpdate('cascade')
            ->onDelete('cascade');
        });
        DB::statement("ALTER TABLE `".env('DB_TABLE_PREFIX')."activity_defaults` comment 'Stores default answers for activities, primarly text that needs to somehow be edited'");
    }

    public function down()
    {
        Schema::dropIfExists('activity_defaults');
    }
}
