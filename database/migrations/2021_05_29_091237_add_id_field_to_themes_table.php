<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIdFieldToThemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('themes', function (Blueprint $table) {
            $table->dropForeign(['publisher_id']);
        });
        Schema::table('themes', function (Blueprint $table) {
            $table->dropPrimary('publisher_id');
        });
        Schema::table('themes', function (Blueprint $table) {
            $table->increments('id')->unsigned()->first();
            $table->foreign('publisher_id')
                ->references('id')->on('publishers')
                ->onUpdate('cascade')
                ->onDelete('cascade')
            ;
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
}
