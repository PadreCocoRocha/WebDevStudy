@extends('layouts.myapp')

@section('content')
    {{-- tasks lists --}}
    <div class="col-sm-8 centered full-height" style="padding: 0;">
        @include('todos.todos')
    </div>

    {{-- sidebar --}}
    <div class="col-sm-3 centered">
        @include('partials.sidebar')
    </div>
@endsection
