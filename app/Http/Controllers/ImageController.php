<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Image;
//use Storage;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function create(Request $request) {
    	$image = new Image;
    	$image->path = $request['image'];
    	$image->save();

		return $image;
    }
}
