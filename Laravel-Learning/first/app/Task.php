<?php

namespace App;

class Task extends Model
{
    public static function incomplete(){
    	return static::where('completed', 0);
    }

    public static function complete(){
    	return static::where('completed', 1);
    }
}
