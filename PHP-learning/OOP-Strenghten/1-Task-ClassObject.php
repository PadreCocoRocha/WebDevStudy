<?php

class Task {
	public $description;
	public $completed = false;

	public function __construct($description){
		$this->description = $description;
	}

	public function set($desc){
		$this->description = $desc;
	}

	public function complete(){
		$this->completed = true;
	}
}

$task = new Task("my description");

var_dump($task->description);
var_dump($task->completed);
$task->complete();
var_dump($task->completed);

