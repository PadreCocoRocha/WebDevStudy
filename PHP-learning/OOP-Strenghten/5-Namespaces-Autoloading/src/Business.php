<?php

namespace Company;

use Company\Person;

class Business
{
    protected $staff;

    public function __construct(Staff $staff)
    {
        $this->staff = $staff;
    }

    public function getStaff()
    {
        return $this->staff->getMembers();
    }

    public function hire(Person $person)
    {
        $this->staff->add($person);
    }
}
