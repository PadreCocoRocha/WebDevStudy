<?php

namespace App\Loggers;

use App\Interfaces\Loggable;

class DatabaseLogger implements Loggable
{
    public function execute($message)
    {
        echo "Log message to database: $message" . PHP_EOL;
    }
}
