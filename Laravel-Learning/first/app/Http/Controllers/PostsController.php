<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\{Post, Comment};
use App\Repositories\Posts;
use Carbon\Carbon;

class PostsController extends Controller
{

	public function __construct(){
		$this->middleware('auth')->except(['index', 'show']);
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Posts $posts)
	{
		$posts = $posts->getFiltered();

		return view('posts.index', compact('posts'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		return view('posts.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store()//Request $request)
	{
		$this->validate(request(), [
			'title' => 'required|max:30',
			'body' => 'required|max:240'
		]);

		if (auth()->check()){
			auth()->user()->publish(
				new Post(request(['title', 'body']))
			);
			session()->flash('message', 'Your post has been published!');
		}

		return redirect('/posts');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show(Post $post)
	{
		$comments = $post->comments;
		$tags = $post->tags->pluck('name');
		return view('posts.show', compact(['post','comments', 'tags']));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, $id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy($id)
	{
		//
	}
}
