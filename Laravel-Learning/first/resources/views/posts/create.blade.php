@extends ('layouts.master')

@section ('content')
	<div class="col-sm-8 blog-post">
		<h1>Create Post</h1>
		<form action='/posts' method="POST">
			{{ csrf_field() }}

			<div class="form-group">
				<label for="title">Title:</label>
				<input type="text" class="form-control" id="title" name="title" placeholder="Enter post title" required>
			</div>

			<div class="form-group">
				<label for="body">Content:</label>
				<textarea type="text" class="form-control" id="body" name="body" placeholder="Type your post content here!" required></textarea>
			</div>

			<div class="form-group">
				<button type="submit" class="btn btn-primary">Submit</button>
			</div>

		</form>	

		@include ('partials.errors')

	</div>
@endsection