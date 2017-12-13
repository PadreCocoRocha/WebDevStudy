<?php

require 'vendor/autoload.php';

use App\Loggers\FileLogger;
use App\Loggers\DatabaseLogger;
use App\Controllers\UserController;

$user1 = new UserController(new FileLogger);
$user2 = new UserController(new DatabaseLogger);

$user1->log("My message to file");
$user2->log("My message to database");