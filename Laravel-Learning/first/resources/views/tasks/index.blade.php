@extends ('layouts.master')

@section ('content')
	<ul>
		@foreach ($tasks as $task)
      <li>{{ $task->body }}</li>
    @endforeach
	</ul>
@endsection