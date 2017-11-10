<?php

namespace App;

use Carbon\Carbon;

class Post extends Model
{

	public function comments(){
		return $this->hasMany(Comment::class);
	}

	public function addComment($user_id, $body){
		$comment = new Comment(compact('body'));
		$comment->user_id = $user_id;
		
		$this->comments()->save($comment);
	}

	public function user(){
		return $this->belongsTo(User::class);
	}

	public function scopeFilter($query, $filters){

		if (array_key_exists('month', $filters))
		{
			$query = $query->whereMonth(
				'created_at', Carbon::parse($filters['month'])->month);
		}

		if (array_key_exists('year', $filters))
		{
			$query = $query->whereYear(
				'created_at', Carbon::parse($filters['year'])->year);
		}
	}

	public static function archive()
	{
		return static::selectRaw(
			'year(created_at) year, monthname(created_at) month, count(*) publish')
			->groupBy('year', 'month')
			->get()
			->toArray();
	}
}