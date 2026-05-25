<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table)
        {
            $table->id();
            $table->string('title'); // Judul artikel (cth: Memo, Letter)
            $table->string('slug')->unique(); // URL ramah SEO (cth: memo, business-letter)
            $table->text('description'); // Deskripsi singkat untuk kartu di beranda
            $table->longText('content'); // Isi lengkap materi artikel
            $table->string('image_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
