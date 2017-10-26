<?php

namespace App\Core;

class Router {
	protected $routes = [
		'GET' => [],
		'POST' => []
	];

	// This is a static function, it doesn't belong to an instance but to the class and,
	// thus, doesn't recognize the 'this' keyword.
	public static function load($file){
		// instantiate Router
		$router = new static;
		// Acquire routes from routes.php file and
		// load routes into this instance of Router for later use
		require $file;
		// return the created instance
		return $router;
	}

	public function define($routes){
		$this->routes = $routes;
	}

	public function get($uri, $controller){
		$this->routes['GET'][$uri] = $controller;
	}

	public function post($uri, $controller){
		$this->routes['POST'][$uri] = $controller;
	}

	public function direct($uri, $requestType){
		if (array_key_exists($uri, $this->routes[$requestType])){
			$this->callAction(
				...explode("@", $this->routes[$requestType][$uri]));
		} else {
			throw new Exception('No route defined for this URI.');
		}
		
	}

	protected function callAction($controller, $action){
		$controller = "App\\Controllers\\{$controller}";
		if (method_exists($controller, $action)){
			$controller::$action();
		} else {
			throw new \Exception("$controller doesn't have $action action.");
		}
	}
}