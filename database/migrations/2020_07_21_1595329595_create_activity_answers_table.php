<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivityAnswersTable extends Migration
{
    public function up()
    {
        Schema::create('activity_answers', function (Blueprint $table) {

		$table->increments('id')->unsigned()->comment('Unique ID of this answer.');
		$table->integer('activity_id')->unsigned()->comment('Activity ID in which this answer shows up.');
		$table->tinyInteger('slot')->unsigned()->comment('Weight of this answer - not yet in use.');
		$table->string('caption',512)->comment('Answer caption for radio and checkbox activities');
        $table->tinyInteger('correct')->unsigned()
            ->comment('For radio and checkbox activities, a 0 or 1 for whether this answer is correct or not. For Click activities, the position number (starting 0) of a correct answer, or 999 when a Click activity is solved correctly with no clicks.');
        $table->timestamps();
        $table->foreign('activity_id')
            ->references('id')->on('activities')
            ->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('activity_answers');
    }
}
