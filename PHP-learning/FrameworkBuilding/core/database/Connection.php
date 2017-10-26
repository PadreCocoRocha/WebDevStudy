<?php
// access Database through PHP'sPDO library

namespace App\Core\Database;

class Connection {
	public static function make($config){
		try { 
			$dbh = new \PDO(
				$config['connection'].";dbname=".$config['name'],
				$config['username'],
				$config['password'],
				$config['options']
			);
		} catch(PDOException $e){
			die('Connection failed: ' . $e->getMessage());
		}
		return $dbh;
	}	
}