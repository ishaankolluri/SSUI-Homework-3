function showModal(){
	var modal = document.getElementById('shoppingCart');
	modal.style.display = "block";
	var span = document.getElementById("close");
	span.onclick = function(){
		modal.style.display = "none";
	}
	window.onclick = function(event){
		if(event.target == modal){
			modal.style.display = "none";
		}
	}
}

function detailPlus(){
	var num = document.getElementsByClassName("detailNumber")[0];
	prs = parseInt(num.innerHTML());
	num.innerHTML = prs + 1;
}

function detailMinus(){
	var num = document.getElementsByClassName("detailNumber")[0];
	prs = parseInt(num.innerHTML());
	if(prs - 1 >= 0){
		num.innerHTML = prs + 1;
	}
}