<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Todo extends Model
{
	protected $guarded = [];

	public function scopeThisWeek($query, $filters=Carbon::now()->date){
		if (array_key_exists('week', $filters)){
			$query->whereWeek('updated_at',
				Carbon::parse($filters['week']->week)); 
		}
		if (array_key_exists('month', $filters)){
			$query->whereMonth('updated_at', 
				Carbon::parse($filters['month']->month)); 
		}
		if (array_key_exists('year', $filters)){
			$query->whereYear('updated_at', 
				Carbon::parse($filters['year']->year)); 
		}
	}
}
