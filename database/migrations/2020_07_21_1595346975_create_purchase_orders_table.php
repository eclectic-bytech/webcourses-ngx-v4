<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseOrdersTable extends Migration
{
    public function up()
    {
        Schema::create('purchase_orders', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->bigInteger('uid')->unsigned();
            $table->mediumInteger('cid')->unsigned();
            $table->timestamp('date')->useCurrent();
            $table->string('coupon',32)->nullable()->comment('MD5 hash of coupon used at purchase');
            $table->mediumInteger('price')->unsigned()->comment('Full price of course');
            $table->mediumInteger('discount')->unsigned()->nullable()->comment('Discount to be applied');
            $table->mediumInteger('tax')->unsigned()->nullable()->comment('GST, if applicable (CA users only)');
            $table->mediumInteger('paid_total')->unsigned()->nullable()->comment('Total the user paid: course price, minus discount, plus CA taxes.');
            $table->string('checkout_id',256)->comment('Stripe checkout ID, or auto-generated internal when course is 100% discounted');
            $table->string('payment_intent',256)->comment('Stripe payment intent ID, or \'no_pi_id\' when course is 100% discounted');
            $table->string('charge_id',256)->nullable()->comment('Stripe charge ID, or null when course is 100% discounted');
            $table->string('receipt_url',256)->nullable()->comment('Stripe receipt_url, or null when course is 100% discounted');
            $table->json('charge_object')->nullable()->comment('Stripe charge_object in json format, or null when course is 100% discounted');
            $table->timestamps();
            $table->foreign('uid')
                ->references('id')->on('users')
                ->onUpdate('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('purchase_orders');
    }
}
