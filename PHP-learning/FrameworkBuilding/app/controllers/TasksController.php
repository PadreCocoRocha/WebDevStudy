<?php

namespace App\Controllers;

use App\Core\{App, Helpers};

class TasksController{
	public static function index(){
		$tasks = App::get('db')->selectAll('todos', 'Task');
		return Helpers::view('tasks', compact('tasks'));
	}

	public static function store(){
		$data = [
			'description' => $_POST['description'],
			'completed' => false
		];

		App::get('db')->insert("todos", $data);

		return static::index();
	}
}
