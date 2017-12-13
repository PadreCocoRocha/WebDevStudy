@include('partials.header')
    
{{-- Container of the vue view implementation --}}
<div id="app">
    <header>
        {{-- include navbar --}}
        @include('partials.nav')


        <div class="container">
            <div class="page-header">
                <h1><strong>My day-to-day management app</strong></h1>
                <h2></h2>
            </div>
        </div>

    </header>

    {{-- bigger window content --}}
    <div class="container app-body">
        {{-- row container --}}
        <div class="row full-height">

            {{-- page content --}}
            @yield('content')

        </div> {{-- row container --}}    

    </div> {{-- app body --}}

</div> {{-- #app --}}

@include('partials.footer')