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
	prs = parseInt(num.innerHTML);
	num.innerHTML = prs + 1;
}

function detailMinus(){
	var num = document.getElementsByClassName("detailNumber")[0];
	prs = parseInt(num.innerHTML);
	if(prs - 1 >= 0){
		num.innerHTML = prs - 1;
	}
}

function cartPlus(obj){
	var num = obj.parentNode.parentNode.getElementsByClassName('modalNumber')[0];
	var val = parseInt(num.innerHTML) + 1;
	num.innerHTML = val;
}

function cartMinus(obj){
	var num = obj.parentNode.parentNode.getElementsByClassName('modalNumber')[0];
	var val = parseInt(num.innerHTML) - 1;
	if(val >= 0){
		num.innerHTML = val;
	}
}

function cartRemove(obj){
	var rowParent = obj.parentNode.parentNode.parentNode;
	rowParent.parentNode.removeChild(rowParent);
}

function cartCheckout(){
	alert("This is the end of my prototype! Thanks for reading. Feel free to close this alert and keep messing with the site.");
}


function productPlus(obj){
	var counter = obj.parentNode.getElementsByClassName('counter')[0];
	var val = parseInt(counter.innerHTML);
	counter.innerHTML = val + 1;
}

function productMinus(obj){
	var counter = obj.parentNode.getElementsByClassName('counter')[0];
	var val = parseInt(counter.innerHTML) - 1;
	if(val >= 0){
		counter.innerHTML = val;
	}
}