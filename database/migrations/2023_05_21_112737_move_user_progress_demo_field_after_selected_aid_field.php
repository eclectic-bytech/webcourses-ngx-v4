<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
public function up()
    {
        // Create a new temporary column
        Schema::table('user_progress', function (Blueprint $table) {
            $table->tinyInteger('new_demo')->after('selected_aid')->unsigned()->default(1);
        });

        // Copy the data from the `demo` column to the new temporary column
        DB::statement('UPDATE wngx_user_progress SET new_demo = demo');

        // Remove the original `demo` column
        Schema::table('user_progress', function (Blueprint $table) {
            $table->dropColumn('demo');
        });

        // Rename the new temporary column to `demo`
        Schema::table('user_progress', function (Blueprint $table) {
            $table->renameColumn('new_demo', 'demo');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }

};
