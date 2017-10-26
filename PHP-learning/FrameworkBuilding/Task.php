<?php

class Task {
	protected $description;
	protected $completed = false;

	// Constructor is not needed when using PDO::PDOPrepare::fetchAll($obj, class_name)
	// public function __construct($desc){
	// 	$this->description = $desc;
	// }

	public function isComplete($str=false){
		if ($str) {
			return $this->completed ? "Yes" : "No";	
		} else {
			return $this->completed;
		}
	}

	public function complete(){
		$this->completed = true;
	}

	public function describe(){
		echo $this->description;
	}
}