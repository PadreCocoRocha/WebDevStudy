<?php

namespace App\Core\Database;

class QueryBuilder {
	protected $dbh;

	public function __construct($dbh){
		$this->dbh = $dbh;
	}

	public function selectAll($table, $intoClass=""){
		try {
			$stmt = $this->dbh->prepare("select * from {$table}");
			$stmt->execute();
		}catch (PDOException $e){
			echo "Failed building query: " . $e->getMessage();
		}
		if ($intoClass){
			return $stmt->fetchAll(\PDO::FETCH_CLASS, $intoClass);
		} else {
			return $stmt->fetchAll(\PDO::FETCH_CLASS);
		}
	}

	public function insert($table, $data){
		try {
			$stmt = $this->dbh->prepare(
				$this->buildInsertQuery($data, $table)
			);
			$stmt->bindParam(':description', $data['description']);
			$stmt->bindParam(':completed', $data['completed']);

			$stmt->execute();
		} catch (PDOException $e){
			echo ("Failed query: " . $e->getMessage());
		}
	}

	// SQL insert query constructor
	private function buildInsertQuery($data, $table){
	// More compact code using sprintf, implode and array_keys
		$query = sprintf(
			"INSERT INTO %s (%s) VALUES (%s)",
			$table,
			implode(', ', array_keys($data)),
			':' . implode(', :', array_keys($data))
			);
		return $query;
	// My code
		/* $keys_str = $values_str = '(';
		$len = count($data) - 1;
		$i = 0;
		foreach($data as $key){
			$sep = ($i != $len) ? ", " : ")";
			$keys_str .= "$key" . $sep;
			$values_str .= ":$key" . $sep;
			$i++;
		}
		return "INSERT INTO $table " . $keys_str . " VALUES " . $values_str; */
	}
}