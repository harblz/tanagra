<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
	protected $toTruncate = ['users'];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	foreach($this->toTruncate as $table) {
    		DB::table($table)->truncate();
    	}

        $this->call('UsersTableSeeder');
        $this->call('ImageTableSeeder');
        $this->call('WordTableSeeder');
    }
}
