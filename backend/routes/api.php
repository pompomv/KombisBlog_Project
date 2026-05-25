<?php

use Illuminate\Support\Facades\Route;
use App\Models\Post;

// API untuk mengambil semua artikel
Route::get('/posts', function () {
    return response()->json(Post::latest()->get());
});

// API untuk mengambil 1 artikel spesifik berdasarkan slug
Route::get('/posts/{slug}', function ($slug) {
    $post = Post::where('slug', $slug)->firstOrFail();
    return response()->json($post);
});
