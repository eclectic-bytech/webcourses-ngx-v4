<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserLongAnswersTable extends Migration
{
    public function up()
    {
        Schema::create('user_long_answers', function (Blueprint $table) {

		$table->increments('id')->unsigned();
        $table->mediumtext('answer')->comment('User input.');

   //      $table->foreign('progress_id')
			// ->references('id')->on('user_progress')
			// ->onUpdate('cascade')
   //          ->onDelete('cascade');
   //      $table->foreign('activity_id')
			// ->references('activity_id')->on('course_syllabus')
			// ->onUpdate('cascade')
   //          ->onDelete('cascade');
   //      $table->foreign('chapter_id')
			// ->references('id')->on('chapters')
			// ->onUpdate('cascade')
   //          ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_long_answers');
    }
}
