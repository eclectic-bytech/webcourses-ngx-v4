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
        Schema::table('activities', function (Blueprint $table) {
            $table->dropForeign('wngx_activities_id_foreign');
        });

        Schema::table('user_progress', function (Blueprint $table) {
            $table->dropForeign('wngx_user_progress_selected_aid_foreign');
        });

        Schema::table('bookmarks', function (Blueprint $table) {
            $table->dropForeign('wngx_activity_bookmarks_aid_foreign');
        });

        Schema::table('user_answers', function (Blueprint $table) {
            $table->dropForeign('wngx_user_answers_activity_id_foreign');
        });

        DB::statement("
            ALTER TABLE `wngx_course_syllabus`
            CHANGE COLUMN `activity_id` `activity_id` INT(10) UNSIGNED NOT NULL;
        ");

        DB::statement('
            ALTER TABLE `wngx_course_syllabus`
            ADD CONSTRAINT `wngx_course_syllabus_wngx_activities`
            FOREIGN KEY (`activity_id`)
            REFERENCES `wngx_activities` (`id`)
            ON UPDATE CASCADE ON DELETE CASCADE;
        ');

        DB::statement('
            ALTER TABLE `wngx_user_progress`
            ADD CONSTRAINT `wngx_user_progress_wngx_activities`
            FOREIGN KEY (`selected_aid`)
            REFERENCES `wngx_activities` (`id`)
            ON UPDATE CASCADE ON DELETE SET NULL;
        ');

        DB::statement('
            ALTER TABLE `wngx_bookmarks`
            ADD CONSTRAINT `wngx_bookmarks_wngx_activities`
            FOREIGN KEY (`aid`)
            REFERENCES `wngx_activities` (`id`)
            ON UPDATE CASCADE ON DELETE CASCADE;
        ');

        DB::statement('
            ALTER TABLE `wngx_user_answers`
            ADD CONSTRAINT `wngx_user_answers_wngx_activities`
            FOREIGN KEY (`activity_id`)
            REFERENCES `wngx_activities` (`id`)
            ON UPDATE CASCADE ON DELETE CASCADE;
        ');

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
