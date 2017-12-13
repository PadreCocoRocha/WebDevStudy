{{-- Navbar implementation --}}
<nav class="navbar navbar-inverse navbar-fixed-top navbar-offset" style="border-radius: 0px;">
    <div class="container-fluid">

        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand">My Diary</a>
        </div>

        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li class="active"><a href="/home">Home</a></li>
                <li><a href="/diary">Diary</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                @if (!Auth::check())
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                @else
                        <li><a href="/user">{{ Auth::user()->name }}</a></li>
                        <li><a href="/logout">Logout</a></li>
                @endif
            </ul>
        </div>
        
    </div>
</nav>