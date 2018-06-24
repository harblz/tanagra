<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    public function run()
    {
		$harblz = new App\User;
		$harblz->name = "Alex";
		$harblz->email = "harblz@gmail.com";
		$harblz->password = bcrypt('Exitus1lol'); // super secret test password
		$harblz->remember_token = str_random(10);
		$harblz->save();
    }
}
