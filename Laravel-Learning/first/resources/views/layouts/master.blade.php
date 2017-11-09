<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="">
		<meta name="author" content="">
		<link rel="icon" href="../../../../favicon.ico">

		<title>Blog Template for Bootstrap</title>

		<!-- Bootstrap core CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

		<!-- Custom styles for this template -->
		<link href="/css/app.css" rel="stylesheet">
	</head>
	
	<header>

		{{-- Nav bar --}}
		@include ('partials.nav')
		
		{{-- Blog title and small intro --}}
		<div class="blog-header">
			<div class="container">
				<h1 class="blog-title">The Bootstrap Blog</h1>
				<p class="lead blog-description">An example blog template built with Bootstrap.</p>
			</div>
		</div>

	</header>

	<body>
	<main role="main" class="container">
		<div class="row">

			{{-- Main section --}}
			<div class="col-sm-8 blog-main">
				@yield ('content')
			</div>

			{{-- Sidebar --}}
			<aside class="col-sm-3 ml-sm-auto blg-sidebar">
				@include ('layouts.sidebar')
			</aside>

	  </div>{{-- /.row --}}
	</main>{{-- /.container --}}

	{{-- Footer --}}
	@include ('partials.footer')

	</body>
</html>