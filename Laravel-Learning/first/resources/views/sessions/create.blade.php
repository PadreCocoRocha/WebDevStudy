@extends ('layouts.master')

@section ('content')

<div class="col-sm-8">
		<h1>Login</h1>
	</div>

	<form method="POST" action="/login">
		{{ csrf_field() }}
		<div class="form-group">
			<label for="email">Email:</label>
			<input type="text" class="form-control" name="email" id="email" required>
		</div>

		<div class="form-group">
			<label for="password">Password:</label>
			<input type="password" class="form-control" name="password" id="password" required>
		</div>

		<div class="form-group">
			<button class="btn btn-primary">Login!</button>
		</div>
		@include ('partials.errors')
	</form>

@endsection