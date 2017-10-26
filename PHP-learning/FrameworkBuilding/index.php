<?php

use App\Core\{Request, Router};

// Composer is dealing with the class dependencies loading
require 'vendor/autoload.php';
require 'core/bootstrap.php';

Router::load('app/routes.php')
	->direct(Request::uri(), Request::method());