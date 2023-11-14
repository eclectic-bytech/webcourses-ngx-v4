<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::table('course_syllabus', function (Blueprint $table) {
            $table->dropForeign('wngx_course_syllabus_chapter_id_foreign');
        });

        Schema::table('user_answers', function (Blueprint $table) {
            $table->dropForeign('wngx_user_answers_chapter_id_foreign');
        });

        DB::statement("
            ALTER TABLE `wngx_chapters`
            CHANGE COLUMN `id` `id` MEDIUMINT(7) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Unique machine chapter ID' FIRST;
        ");

        DB::statement('
            ALTER TABLE `wngx_course_syllabus`
            ADD CONSTRAINT `wngx_course_syllabus_wngx_chapters`
            FOREIGN KEY (`chapter_id`)
            REFERENCES `wngx_chapters` (`id`)
            ON UPDATE CASCADE ON DELETE CASCADE;
        ');

        DB::statement('
            ALTER TABLE `wngx_user_answers`
            ADD CONSTRAINT `wngx_user_answers_wngx_chapters`
            FOREIGN KEY (`chapter_id`)
            REFERENCES `wngx_chapters` (`id`)
            ON UPDATE CASCADE ON DELETE CASCADE;
        ');









        // Schema::table('chapters', function (Blueprint $table) {
        //     $table->dropPrimary('id');
        // });

        // // Step 1: Create a new temporary column
        // Schema::table('chapters', function (Blueprint $table) {
        //     $table->unsignedMediumInteger('new_id2')->increments()->first();
        // });

        // // Migrate data from old id to new_id
        // DB::statement('UPDATE wngx_chapters SET new_id2 = id');

        // Schema::table('chapters', function (Blueprint $table) {
        //     $table->primary('new_id2');
        // });

        // Schema::table('chapters', function (Blueprint $table) {
        //     $table->dropColumn('id');
        // });











        // Schema::table('chapters', function (Blueprint $table) {
        //     $table->renameColumn('new_id2', 'id')->mediumInteger()->change();
        // });

        // Schema::table('chapters', function (Blueprint $table) {
        //     $table->mediumInteger('id')->change();
        // });

        // ALTER TABLE `wngx_chapters`
	    // CHANGE COLUMN `id` `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT FIRST;

        // Schema::table('course_syllabus', function (Blueprint $table) {
        //     $table->integer('chapter_id')->unsigned()->change();
        // });

        // Schema::table('user_answers', function (Blueprint $table) {
        //     $table->integer('chapter_id')->unsigned()->change();
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
