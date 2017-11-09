<div class="blog-post">
	
	<a href="/posts/{{ $post->id }}">
		<h2 class="blog-post-title"> {{ $post->title }} </h2>
	</a>

  <p class="blog-post-meta"> 
  	{{ $post->created_at->ToFormattedDateString() }} by 
  	<a href="/users/{{ $post->user_id }}"> {{ $post->user->name }} </a>
  </p>

  <p> {{ $post->body }} </p>

</div>
