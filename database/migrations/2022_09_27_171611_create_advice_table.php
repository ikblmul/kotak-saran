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
        Schema::create('advices', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->json('attachment')->default('[]');
            $table->foreignId('author_id')->nullable();
            $table->foreignId('topic_id');

            $table->foreign('author_id')->on('users')->references('id')->nullOnDelete();
            $table->foreign('topic_id')->on('topics')->references('id')->cascadeOnDelete();
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
        Schema::dropIfExists('advice');
    }
};
