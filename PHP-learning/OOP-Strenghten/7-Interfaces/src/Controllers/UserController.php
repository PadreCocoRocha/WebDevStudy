<?php

namespace App\Controllers;

use App\Interfaces\Loggable;

class UserController
{
    protected $logger;

    public function __construct(Loggable $logger)
    {
        $this->logger = $logger;
    }

    public function log($message)
    {
        $this->logger->execute($message);
    }
}
