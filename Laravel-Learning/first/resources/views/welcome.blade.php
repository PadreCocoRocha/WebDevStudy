@extends ('layouts.master')

@if ($flash = session('message'))
	<div id="flash-message" class="alert alert-success">
		{{ $flash }}
	</div>
@endif

@section ('content')
	<h1>Welcome page!</h1>
@endsection