<?php
use App\Http\Controllers\publicControllers\profileController;
use App\Http\Controllers\dashboardController;
use App\Http\Controllers\userdController;
use App\Http\Controllers\customAuth;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
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
        'canLogin' => Route::has('Login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


// Aunthenticated Access
Route::group(['middleware' => 'auth'], function () {

    //Authenticated route
    Route::post('/logoutuser', [customAuth::class, 'logoutUser'])->name('logoutuser');

    //Dashboard page
    Route::get('/dashboard', [dashboardController::class, 'index'])->name('dashboard');

    //Users page
    Route::get('/users', [userdController::class, 'index'])->name('users');

    //Profile page
    Route::get('/profile', [profileController::class, 'index'])->name('profile');
    Route::delete('/profilePhotoDelete', [profileController::class, 'deleteProfilePhoto'])->name('profilePhotoDelete');
    Route::put('/profilePhotoUpdate', [profileController::class, 'updateProfilePhoto'])->name('profilePhotoUpdate');
    Route::delete('/profileDelete', [profileController::class, 'deleteProfile'])->name('profileDelete');
});
