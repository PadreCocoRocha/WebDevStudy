@extends ('layouts.master')

@if ($flash = session('message'))
	<div id="flash-message" class="alert alert-success">
		{{ $flash }}
	</div>
@endif

@section ('content')
    {{-- Blog main slice of page html --}}
    @foreach ($posts as $post)
      @include ('posts.post')
    @endforeach

    <nav class="blog-pagination">
      <a class="btn btn-outline-primary" href="#">Older</a>
      <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
    </nav> <!-- /.blog-main -->
    
@endsection 