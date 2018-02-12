<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Image;
use Storage;

class ImageController extends Controller
{
    public function create(Request $request) {
    	$path = Storage::putFile('image', $request->file('image'));

    	$image = new App\Image;
    	$image->path = $path;
    	$image->save();

		return $path;
    }
}
