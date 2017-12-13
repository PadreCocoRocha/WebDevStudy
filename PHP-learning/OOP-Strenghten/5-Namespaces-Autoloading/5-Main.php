<?php

use Company\Staff;
use Company\Person;
use Company\Business;

$me = new Person("Lucas Rocha");
$you = new Person("Mike Wazowski");
$ceo = new Person("Elon Musk");
$Tesla = new Business(
    new Staff([$ceo, $you])
);

$Tesla->hire($me);

foreach ($Tesla->getStaff() as $emp) {
    echo $emp->getName() . "\n";
}
