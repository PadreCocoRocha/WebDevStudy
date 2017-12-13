<?php

namespace App\Loggers;

use App\Interfaces\Loggable;

class FileLogger implements Loggable
{
    public function execute($message)
    {
        echo "Log message to file: $message" . PHP_EOL;
    }
}
