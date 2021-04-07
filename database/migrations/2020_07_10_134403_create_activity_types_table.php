<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivityTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activity_types', function (Blueprint $table) {
            $table->string('id', 16)->primary()->comment('Machine readable activity type');
            $table->string('label', 32)->comment('Human friendly activity type');
        });
        DB::statement("ALTER TABLE `".env('DB_TABLE_PREFIX')."activity_types` ADD help MEDIUMBLOB COMMENT 'Learner HTML instructions on how to complete the activity, how it is scored, or similar.'");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activity_types');
    }
}

