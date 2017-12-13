<?php

class Person {
	
	protected $name;
	protected $age;

	public function __construct($name, $age){
		$this->setName($name);
		$this->setAge($age);
	}

	protected function setName($name){
		$this->name = $name;
	}

	public function setAge($age){
		if ($age < 18){
			throw new Exception("Sorry, the way too young", 1);
		}
		$this->age = $age;
	}

	public function getName(){
		return $this->name;
	}

	public function getAge($type = ''){
		if ($type == 'days'){
			return $this->age * 365;
		} elseif ($type == 'months') {
			return $this->age * 12;
		} else {
			return $this->age;
		}
	}
}


$persons = [
	new Person("Lucas", 25),
	new Person("Camila", 19),
	new Person("Nino", 5) // Throw exception
];

foreach ($persons as $p) {
	$name = $p->getName();
	$age = $p->getAge();
	print("Name: $name, age: $age\n");
}


