<?php

$dsn="mysql:host=localhost;dbname=freshcart"
$dbusername="root";
$dbpaasword="";

try {
   $pdo= new PDO($dsn, $dbusername, $dbpaasword);
   $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
   echo "connection is failed:" .$e->getMessage();
}
