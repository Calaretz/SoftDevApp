<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthManager;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactsController;

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/login', [AuthManager::class, 'login'])->name('login');
Route::post('/login', [AuthManager::class, 'loginPost'])->name('login.post');
Route::get('/registration', [AuthManager::class, 'registration'])->name('registration');
Route::post('/registration', [AuthManager::class, 'registrationPost'])->name('registration.post');
Route::get('/logout', [AuthManager::class, 'logout'])->name('logout');
Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');



// Protected routes
Route::middleware('auth')->group(function () {
    // Profile route
    Route::get('/profile', function () {
        return "Hi, this is your profile page";
    })->name('profile');

    // Route for updating user profile
    Route::post('/user/update', [UserController::class, 'update'])->name('user.update');

    // Contacts resource routes
    Route::resource('contacts', ContactsController::class);
});
