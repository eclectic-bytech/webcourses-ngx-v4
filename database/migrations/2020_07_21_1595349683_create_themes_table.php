<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThemesTable extends Migration
{
    public function up()
    {
        Schema::create('themes', function (Blueprint $table) {

        $table->mediumInteger('publisher_id')->unsigned();
        $table->string('label', 255);
        $table->string('path', 255)->comment('Directory name where theme resides in /publisher_files');
		$table->string('bootstrap_nav',16)->default('navbar-dark');
        $table->primary('publisher_id');
        $table->timestamps();
        $table->foreign('publisher_id')
			->references('id')->on('publishers')
            ->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('themes');
    }
}
