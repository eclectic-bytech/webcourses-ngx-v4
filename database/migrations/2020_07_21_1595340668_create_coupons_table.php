<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCouponsTable extends Migration
{
    public function up()
    {
        Schema::create('coupons', function (Blueprint $table) {

		$table->string('id',32)->comment('MD5 hash of coupon code');
        $table->string('code',24)->comment('Coupon code');
		$table->string('label',128)->default('Unlabelled coupon');
		$table->tinyInteger('active')->unsigned()->default(0);
		$table->mediumInteger('discount')->unsigned()->comment('Price discount in smallest unit, eg. cents');
		$table->mediumInteger('cid')->unsigned();
        $table->mediumInteger('gid')->unsigned()->nullable()
            ->comment('Add user to this group when code is used');
		$table->datetime('expiry')->nullable();
		$table->smallInteger('uses')->unsigned()->nullable()->default(0);
        $table->smallInteger('uses_max')->unsigned()->default(0);
        $table->timestamps();
        $table->primary('id');
        $table->foreign('cid')
			->references('id')->on('courses')
			->onUpdate('cascade')
            ->onDelete('cascade');
        $table->foreign('gid')
			->references('gid')->on('groups')
			->onUpdate('cascade')
			->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('coupons');
    }
}
