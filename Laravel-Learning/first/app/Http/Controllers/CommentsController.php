<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\{Post,Comment};

class CommentsController extends Controller
{
	public function store(Post $post){
		$this->validate(request(), [
			'body' => 'required|min:2'
		]);

		if (auth()->check()){
			$post->addComment(auth()->id(), request('body'));
			
			session()->flash('message', 'Your post has been published!');
		}

		return back();
	}
}
