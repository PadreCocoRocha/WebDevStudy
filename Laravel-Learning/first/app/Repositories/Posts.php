<?php

namespace App\Repositories;

use App\{Post, Redis};

class Posts
{
	protected $redis;
	public function __construct(Redis $redis)
	{
		$this->redis = $redis;
	}

	public function all()
	{
		return Post::all();
	}
	
	public function getFiltered(){
        return Post::latest()
            ->filter(request(['month', 'year']))
            ->get();
	}

}