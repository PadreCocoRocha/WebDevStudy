<?php

class Person {
	protected $name;

	public function __construct ($name){
		$this->name = $name;
	}

	public function getName(){
		return $this->name;
	}
}

class Business {
	protected $staff;

	public function __construct(Staff $staff){
		$this->staff = $staff;
	}

	public function getStaff(){
		return $this->staff->getMembers();
	}

	public function hire(Person $person){
		$this->staff->add($person);
	}
}

class Staff {
	protected $members = [];

	public function __construct($members = []){
		$this->members = $members;
	}

	public function add(Person $person){
		$this->members[] = $person;
	}

	public function getMembers(){
		return $this->members;
	}
}

$me = new Person("Lucas Rocha");
$you = new Person("Mike Wazowski");
$ceo = new Person("Elon Musk");

$staff = new Staff([$ceo, $you]);

$Tesla = new Business($staff);

$Tesla->hire($me);

var_dump($Tesla->getStaff());
foreach ($Tesla->getStaff() as $emp) {
	echo $emp->getName() . "\n";
}

