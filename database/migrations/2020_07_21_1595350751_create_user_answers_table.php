<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserAnswersTable extends Migration
{
    public function up()
    {
        Schema::create('user_answers', function (Blueprint $table) {

		$table->increments('id')->unsigned();
        $table->integer('activity_id')->unsigned()
            ->comment('The activity id to which this user answer belongs to.');
        $table->mediumInteger('chapter_id')->unsigned()
            ->comment('The id of the chapter the answer belongs to. Used for easily generating chapter completion status.');
        $table->integer('progress_id')->unsigned()
            ->comment('User progress ID from the user_progress table.');
        $table->integer('answer_id')->unsigned()
            ->comment('The ID the user chose from activity_answers table. For long-answer questions, this\'ll be the id of the entry in _user_long_answers table.');
        $table->timestamps();
        $table->foreign('progress_id')
			->references('id')->on('user_progress')
			->onUpdate('cascade')
            ->onDelete('cascade');
        $table->foreign('activity_id')
			->references('activity_id')->on('course_syllabus')
			->onUpdate('cascade')
            ->onDelete('cascade');
        $table->foreign('chapter_id')
			->references('id')->on('chapters')
			->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_answers');
    }
}
