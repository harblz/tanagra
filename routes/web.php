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

// Is the user logged in? (changes UI -- not for any real authentication, etc.)
Route::get('/user/login-status', function() {
	$status = Auth::check();

	if (Auth::check()) {
		$user   = Auth::user();
		return response(['status' => $status, 'user' => $user]);
	} else {
		return response(['status' => $status]);
	}
});

// test image / word seeder
Route::get('/words/1/all', function() {
	$words = App\word::all();

	return response(['words' => $words]);
});

Route::post('/image/upload', 'ImageController@create');