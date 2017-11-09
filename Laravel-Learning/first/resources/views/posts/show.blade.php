@extends ('layouts.master')

@section ('content')
	{{-- Show post --}}
	@include ('posts.post')

	<hr>

	{{-- Show posts comments --}}
	<div class="comments">
		<ul class="list-group">
			@foreach ($comments as $comment)
				<li class="list-group-item">
					<strong> 
						{{ $comment->created_at->diffForHumans() }}
					</strong> 
					by {{ "Who?" }}
					<br>
					{{ $comment->body }}
				</li>
			@endforeach
		</ul>
	</div>
0
	<hr>
  @include ('partials.errors')
	{{-- Add a comment --}}
	<div class="card">
		<div class="card-header">
			Add a comment!
		</div>
		<div class="card-block">
			<form method="POST" action="/posts/{{ $post->id }}/comments" class="">
				{{ csrf_field() }}
				<div class="form-group">
					<textarea type="text" name="body" class="form-control" placeholder="Your comment here"></textarea>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-primary">Add comment!</button>
				</div>
			</form>
		</div>
	</div>


@endsection