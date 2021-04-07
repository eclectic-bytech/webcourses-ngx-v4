<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->mediumInteger('id')->unsigned()->comment('Unique Web Course ID');
            $table->smallInteger('active_bid')->unsigned()->comment('');
            $table->string('title',128)->comment('');
            $table->string('cover',64)->default('default/course-cover.jpg');
            $table->mediumInteger('publisher_id')->unsigned()->comment('User ID of Publisher (Course Owner)');
            $table->tinyInteger('published')->default(0)->unsigned()
                ->comment('Published flag, where 1 means course is available to students');
            $table->tinyInteger('private')->default(1)->unsigned()
                ->comment('Private courses do not show in any webcourse catalogues');
            $table->decimal('completion_time', 5, 1)->nullable()->unsigned()
            ->comment('Number of hours expected to complete the course. One decimal point of accuracy.');
            $table->string('audience', 256)->nullable()->default('NULL')
            ->comment('Target audience that should find the course useful or interesting.');
            $table->string('cover_alt',256)->nullable()->default('NULL')->comment('Text for alt tag of the cover image');
            $table->string('short_desc',256)->nullable()->default('NULL')->comment('Short description of the web course');
            $table->text('long_desc')->nullable()->comment('Long description of web course');
            $table->text('objective')->nullable()->comment('Learning objective');
            $table->string('eval_type',256)->nullable()->default('NULL')
            ->comment('Type of answer evaluation, e.g. teacher review, real time');
            $table->mediumInteger('price')->default(0)->unsigned()
                ->comment('Course price. Price of 9999999 means the course cannot be purchased. Only enrollment with code is possible.');
            $table->timestamps();
            $table->primary(['id','active_bid']);
            $table->foreign('publisher_id')
                    ->references('id')->on('publishers')
                    ->onUpdate('restrict')
                    ->onDelete('restrict');
		});
    }

    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
