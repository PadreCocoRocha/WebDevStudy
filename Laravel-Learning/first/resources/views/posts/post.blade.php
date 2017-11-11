<div class="blog-post">
	
	<a href="/posts/{{ $post->id }}">
		<h2 class="blog-post-title"> {{ $post->title }} </h2>
	</a>
	
  <p class="blog-post-meta" style="margin-bottom: 0;"> 
  	{{ $post->created_at->ToFormattedDateString() }} by 
  	<a href="/users/{{ $post->user_id }}"> {{ $post->user->name }} </a>
  </p>

	@if (isset($tags))
		<p>
			@foreach ($tags as $tag)
				<a href="/posts/tags/{{ $tag }}" style="text-decoration: none;">
					<span class="badge badge-primary">{{ $tag }}</span>
				</a>
			@endforeach
		</p>
	@endif

  <p> {{ $post->body }} </p>

</div>
