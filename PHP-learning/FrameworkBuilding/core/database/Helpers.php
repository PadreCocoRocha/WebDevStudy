<?php

namespace App\Core\Database;

class Helpers{
	public static function view($uri, $data=[]){
		extract($data);
		return require "views/$uri.view.php";
	}

	public static function redirect($uri){
		return static::view($uri);
	}
}