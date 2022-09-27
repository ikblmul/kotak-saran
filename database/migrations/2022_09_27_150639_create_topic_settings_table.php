<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('topic_settings', function (Blueprint $table) {
            $table->id();

            $table->boolean('slow_mode');
            $table->boolean('only_auth');

            $table->boolean('allow_same_user');
            $table->integer('max_slow_mode', -1);

            $table->string('token');
            $table->foreignId('topic_id');

            $table->foreign('topic_id')->on("topics")->cascadeOnDelete();

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
        Schema::dropIfExists('topic_settings');
    }
};
