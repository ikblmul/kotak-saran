<?php

use App\Http\Controllers\AdviceController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\TopicController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {

    Route::put('/advice/status/{id}', [TopicController::class, 'updateStatus'])->name('advice.status');
    Route::resource('/topic', TopicController::class);
    Route::resource('/group', GroupController::class);
});

Route::resource('advice', AdviceController::class);


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/thanks-fill', function () {
    return "Thanks For Fill";
})->name('thanks.forfill');

require __DIR__ . '/auth.php';
