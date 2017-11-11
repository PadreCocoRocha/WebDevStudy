<?php

namespace App;

use Carbon\Carbon;
use App\Tag;

class Post extends Model
{
	// Get database collection functions
	public function comments(){
		return $this->hasMany(Comment::class);
	}

	public function user(){
		return $this->belongsTo(User::class);
	}

	public function tags()
	{
		return $this->belongsToMany(Tag::class);
	}

	// Insertion functions 
	public function addComment($user_id, $body){
		$comment = new Comment(compact('body'));
		$comment->user_id = $user_id;

		$this->comments()->save($comment);
	}

	public function addTag($tagName)
	{
		$this->tags()->attach(
			Tag::firstOrCreate(['name' => $tagName])
		);
	}

	public function detachTag(Tag $tag)
	{
		$this->tags()->detach($tag);
	}

	// Other functions
	// scopeFilterwill be called with $posts->getFiltered()
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