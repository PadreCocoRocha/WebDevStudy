<?php

namespace App\Controllers;

use App\Core\Helpers;

class PagesController {

	public static function home(){
		return Helpers::view('index');
	}

	public static function about(){
		return Helpers::view('about');
	}

	public static function contact(){
		return Helpers::view('contact');
	}
}