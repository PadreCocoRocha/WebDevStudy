<?php

//dump $data and die if $_die
function dd($data, $_die = true){
	echo '<pre>';
	if ($_die){
		die(var_dump($data));
	} else{
		var_dump($data);
	}
	echo '</pre>';
}