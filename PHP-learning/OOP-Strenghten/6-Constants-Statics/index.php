<?php

use App\Str;
use App\Math;

require 'vendor/autoload.php';

echo Math::pi() . PHP_EOL;
echo Math::square(5) . PHP_EOL;

$string = "Mixed case String" . PHP_EOL;

echo "original string: $string";
echo "lowercase string: " . Str::lc($string);
echo "uppercase string: " . Str::uc($string);


