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
        Schema::table('user_progress', function (Blueprint $table) {
            $table->dropColumn(['wrong', 'correct', 'missed']);
        });
    }

    public function down()
    {
        Schema::table('user_progress', function (Blueprint $table) {
            $table->integer('wrong')->nullable();
            $table->integer('correct')->nullable();
            $table->integer('missed')->nullable();
        });
    }
};
