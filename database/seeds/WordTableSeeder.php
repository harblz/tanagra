<?php

use Illuminate\Database\Seeder;

class WordTableSeeder extends Seeder
{

/*
    {"x":0,"y":0,"w":2,"h":2,"i":"0", "path":"", "word":"cat"},
    {"x":2,"y":0,"w":2,"h":4,"i":"1", "path":"/img/256x256.png", "word":"apple"},
    {"x":4,"y":0,"w":2,"h":5,"i":"2", "path":"/img/256x256.png", "word":"test"},
    {"x":6,"y":0,"w":2,"h":3,"i":"3", "path":"/img/256x256.png", "word":"The"},
    {"x":8,"y":0,"w":2,"h":3,"i":"4", "path":"/img/256x256.png", "word":"Quick"},

    {"x":10,"y":0,"w":2,"h":3,"i":"5", "path":"/img/256x256.png", "word":"Brown"},
    {"x":0,"y":5,"w":2,"h":5,"i":"6", "path":"/img/256x256.png", "word":"Fox"},
    {"x":2,"y":5,"w":2,"h":5,"i":"7", "path":"/img/256x256.png", "word":"Jumped"},
    {"x":4,"y":5,"w":2,"h":5,"i":"8", "path":"/img/256x256.png", "word":"Over"},
    {"x":6,"y":4,"w":2,"h":4,"i":"9", "path":"/img/256x256.png", "word":"The"},
    {"x":8,"y":4,"w":2,"h":4,"i":"10", "path":"/img/256x256.png", "word":"Lazy"},
    {"x":10,"y":4,"w":2,"h":4,"i":"11", "path":"/img/256x256.png", "word":"Dog"},
    {"x":0,"y":10,"w":2,"h":5,"i":"12", "path":"/img/256x256.png", "word":"While"},
    {"x":2,"y":10,"w":2,"h":5,"i":"13", "path":"/img/256x256.png", "word":"Holding"},
    {"x":4,"y":8,"w":2,"h":4,"i":"14", "path":"/img/256x256.png", "word":"an"},
    {"x":6,"y":8,"w":2,"h":4,"i":"15", "path":"/img/256x256.png", "word":"Orange"},
    {"x":8,"y":10,"w":2,"h":5,"i":"16", "path":"/img/256x256.png", "word":"In"},
    {"x":10,"y":4,"w":2,"h":2,"i":"17", "path":"/img/256x256.png", "word":"It's"},
    {"x":0,"y":9,"w":2,"h":3,"i":"18", "path":"/img/256x256.png", "word":"Clenched"},
    {"x":2,"y":6,"w":2,"h":2,"i":"19", "path":"/img/256x256.png", "word":"Jaws"}
*/

    public function run()
    {

    	// 0
		$word = new App\word;
		$word->x = 0;
		$word->y = 0;
		$word->w = 2;
		$word->h = 2;
		$word->i = 0;
		$word->path = App\image::find(1)->path;
		$word->word = 'Cat';
		$word->label = 'Cat';
		$word->save();

    	// 1
		$word = new App\word;
		$word->x = 2;
		$word->y = 0;
		$word->w = 2;
		$word->h = 4;
		$word->i = 1;
		$word->path = App\image::find(2)->path;
		$word->word = 'Apple';
		$word->label = 'Apple';
		$word->save();

    	// 2
		$word = new App\word;
		$word->x = 4;
		$word->y = 0;
		$word->w = 2;
		$word->h = 5;
		$word->i = 2;
		$word->path = App\image::find(3)->path;
		$word->word = 'Tree';
		$word->label = 'Tree';
		$word->save();

    	// 3
		$word = new App\word;
		$word->x = 6;
		$word->y = 0;
		$word->w = 2;
		$word->h = 3;
		$word->i = 3;
		$word->path = App\image::find(4)->path;
		$word->word = 'Balloon';
		$word->label = 'Balloon';
		$word->save();

    	// 4
		$word = new App\word;
		$word->x = 8;
		$word->y = 0;
		$word->w = 2;
		$word->h = 3;
		$word->i = 4;
		$word->path = App\image::find(5)->path;
		$word->word = 'Total';
		$word->label = 'Total';
		$word->save();

    	// 5
		$word = new App\word;
		$word->x = 10;
		$word->y = 0;
		$word->w = 2;
		$word->h = 3;
		$word->i = 5;
		$word->path = App\image::find(6)->path;
		$word->word = 'Somewhat';
		$word->label = 'Somewhat';
		$word->save();
	}
}
