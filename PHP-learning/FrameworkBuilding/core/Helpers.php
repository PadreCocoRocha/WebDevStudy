<?php

namespace App\Core;

class Helpers{
	public static function view($uri, $data=[]){
		extract($data);
		return require "app/views/$uri.view.php";
	}

	public static function redirect($uri){
		return static::view($uri);
	}
}