var global_flavors = [
	"caramelpecan",
	"mapleapple",
	"original",
	"vegan",
	"gluten",
	"bacon",
	"cranberry",
	"buttermilk",
	"bday",
	"carrot",
	"lemon",
	"pumpkin",
	"strawberry",
	"walnut",
	"blackberry",
];

var global_names = [
	"Caramel Pecan",
	"Maple Apple Pecan",
	"Original",
	"Original(Vegan)",
	"Original(Gluten-Free)",
	"Bacon",
	"Cranberry",
	"Buttermilk",
	"Birthday Cake",
	"Carrot Cake",
	"Lemon",
	"Pumpkin Spice",
	"Strawberry",
	"Walnut",
	"Blackberry",
];

function addToCartFromHome(id){
	var shoppingCartContainer = document.getElementsByClassName('modal-content')[0];
	var row = document.createElement('div');
	row.classList.add('modalRow');
	
	var imageContainer = document.createElement('div');
	imageContainer.classList.add('modalImg');
	var rowImage = document.createElement('img');
	rowImage.src = "resources/images/web/rolls/" + global_flavors[id] + "@2x.jpg";
	rowImage.setAttribute("width", "82px");
	rowImage.setAttribute("height", "82px");
	imageContainer.appendChild(rowImage);
	
	var info = document.createElement('div');
	info.classList.add('modalInfo');
	
	var label = document.createElement('div')
	label.classList.add('modalFlavor');
	label.innerHTML = global_names[id];
	info.appendChild(label);

	var quant = document.createElement('div')
	quant.classList.add('modalQuantity');
	var num = document.createElement('div')
	num.classList.add('modalNumber');
	num.innerHTML = 1;
	quant.appendChild(num);
	var toggles = document.createElement('div')
	toggles.classList.add('modalToggles');

	var plus = document.createElement('svg');		
	var plusImage = document.createElement('img');
	plusImage.setAttribute("src", "resources/images/web/plus.svg");
	plusImage.setAttribute("onmouseover", "this.src=\'resources/images/web/plushover.svg\'");
	plusImage.setAttribute("onmouseout", "this.src=\'resources/images/web/plus.svg\'");
	plus.appendChild(plusImage);
	plus.id = id + "_modalplus";
	toggles.appendChild(plus);
	
	var minus = document.createElement('svg');
	var minusImage = document.createElement('img');
	minusImage.setAttribute("src", "resources/images/web/minus.svg");
	minusImage.setAttribute("onmouseover", "this.src=\'resources/images/web/minushover.svg\'");
	minusImage.setAttribute("onmouseout", "this.src=\'resources/images/web/minus.svg\'");
	minus.appendChild(minusImage);
	minus.id = id + "_modalminus";
	toggles.appendChild(minus);

	quant.appendChild(toggles);

	var remove = document.createElement('button');
	remove.innerHTML = "Remove";
	remove.classList.add('modalRemove');
	remove.innerHTML = "Remove";
	quant.appendChild(remove);
	info.appendChild(quant);

	var price = document.createElement('div');
	price.classList.add('modalPrice');
	price.innerHTML = "$10.98";

	row.appendChild(imageContainer);
	row.appendChild(info);
	row.appendChild(price);
	var prepender = document.getElementById('checkoutRow');
	shoppingCartContainer.insertBefore(row, prepender);
	var cartnum = document.getElementById('cartNumber');
	var size = cartnum.innerHTML;
	// console.log(size);
	cartnum.innerHTML = parseInt(size) + 1

	
	var alert = document.getElementById('alert');
	var content = document.getElementsByClassName('alertContent')[0];
	content.innerHTML = "Added to Cart".
	console.log(alert);
	alert.style.display = "block";
	setTimeout(function(){
		alert.style.display = "none";
	}, 2000);

}