<?php

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
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Users
Route::get('/user/login-status', function() {
	$status = Auth::check();

	if (Auth::check()) {
		$user   = Auth::user();
		return response(['status' => $status, 'user' => $user]);
	} else {
		return response(['status' => $status]);
	}
});

Route::post('/image/upload', 'ImageController@create');