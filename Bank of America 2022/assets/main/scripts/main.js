// LOADING & ALERT & BILL SCRIPT

setTimeout(function(){
	document.getElementById("loading").classList.add("hidden");
},1000);

function alerttobill(){
	document.getElementById("loading").classList.remove("hidden");
	setTimeout(function(){
		document.getElementById("zombiealert").classList.add("hidden");
		document.getElementById("zombiebill").classList.remove("hidden");
		document.getElementById("loading").classList.add("hidden");
	},1000);
}

function alerttopay(){
	document.getElementById("loading").classList.remove("hidden");
	setTimeout(function(){
		document.getElementById("zombiealert").classList.add("hidden");
		document.getElementById("zombiepay").classList.remove("hidden");
		document.getElementById("loading").classList.add("hidden");
	},1000);
}

// CARD LOADING

//setTimeout(function(){
//	document.getElementById("loading").classList.add("hidden");
//},1000);

// ADD BANK


function addnewbnk(){
	document.getElementById("loading").classList.remove("hidden");
	setTimeout(function(){
		document.getElementById("zombieaddbnk").classList.add("hidden");
		document.getElementById("zombiebnk").classList.remove("hidden");
		document.getElementById("loading").classList.add("hidden");
	},1000);
}

