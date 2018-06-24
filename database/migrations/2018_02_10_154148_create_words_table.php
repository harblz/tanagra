<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('words', function (Blueprint $table) {
            $table->increments('id'); // note -- vue-grid-UI, for some tragic reason, uses 'i' instead of 'id'
            $table->string('i'); // note -- vue-grid-UI, for some tragic reason, uses 'i' instead of 'id'
            $table->integer('x')->nullable();
            $table->integer('y')->nullable();
            $table->integer('w')->nullable();
            $table->integer('h')->nullable();
            $table->text('path')->nullable();
            $table->string('word')->nullable();
            $table->string('label')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('words');
    }
}
