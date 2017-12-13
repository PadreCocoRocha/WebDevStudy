<?php

namespace App;

class Str
{
	public static function lc (string $string){
		return strtolower($string);
	}

	public static function uc ($str){
		return strtoupper($str);
	}
}