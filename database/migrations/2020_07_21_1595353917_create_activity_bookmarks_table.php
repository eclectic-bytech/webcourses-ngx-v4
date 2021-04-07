<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivityBookmarksTable extends Migration
{
    public function up()
    {
        Schema::create('activity_bookmarks', function (Blueprint $table) {

		$table->increments('id')->unsigned();
        $table->integer('aid')->unsigned()->comment('Bookmark\'s activity id from course_syllabus table');
        $table->mediumInteger('chid')->unsigned()
            ->comment('Bookmark\'s chapter id from chapters table. Redundant?');
        $table->integer('pid')->unsigned()
            ->comment('Bookmark\'s user progress ID from the user_progress table.');
        $table->string('description', 255);
		$table->timestamp('generated')->useCurrent();
        $table->tinyInteger('auto')->unsigned()->default(1)
            ->comment('1 - auto-created bookmark for last accessed activity. 0 - user created permanent bookmark');
        $table->timestamps();
        $table->foreign('pid')
			->references('id')->on('user_progress')
			->onUpdate('cascade')
            ->onDelete('cascade');
        $table->foreign('aid')
			->references('activity_id')->on('course_syllabus')
			->onUpdate('cascade')
            ->onDelete('cascade');
        $table->foreign('chid')
			->references('id')->on('chapters')
			->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('activity_bookmarks');
    }
}
