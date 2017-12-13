<?php

abstract class Shape {
	protected $color;

	public function __construct($color = 'gray') {
		$this->color = $color;
	}

	public function getColor(){
		return $this->color;
	}

	abstract public function getArea();
}

class Square extends Shape {
	protected $length = 4;

	public function getArea(){
		return pow($this->length, 2);
	}
}

class Triangle extends Shape {
	protected $length = 2;
	protected $height = 5;

	public function getArea(){
		return 0.5 * $this->length * $this->height;
	}
}

class Circle extends Shape {
	protected $radius = 2;

	public function getArea(){
		return M_PI * pow($this->radius, 2);
	}
}

$s = new Triangle;
echo $s->getArea();
echo $s->getColor();
