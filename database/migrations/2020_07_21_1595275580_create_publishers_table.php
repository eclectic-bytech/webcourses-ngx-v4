<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePublishersTable extends Migration
{
    public function up()
    {
        Schema::create('publishers', function (Blueprint $table) {
            $table->mediumIncrements('id')->unsigned();
            $table->string('id_alias',32)->unique();
            $table->bigInteger('owner_uid')->unsigned()->default(0)->unique()->comment('UID that owns this publisher account.');
            $table->string('name',48)->default('0')->comment('Publisher Name');
            $table->string('website',256)->nullable()->default('NULL')->comment('Publisher website address');
            $table->string('contact_fname',50)->nullable()->default('NULL');
            $table->string('contact_lname',64)->nullable()->default('NULL');
            $table->string('contact_email',256)->nullable()->default('NULL');
            $table->string('contact_phone',24)->nullable()->default('NULL');
            $table->string('country',64)->nullable()->default('NULL');
            $table->string('province',64)->nullable()->default('NULL');
            $table->string('city',64)->nullable()->default('NULL');
            $table->foreign('owner_uid')->references('id')->on('users');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('publishers');
    }
}
