var global_flavors = [
	"caramelpecan",
	"mapleapple",
	"original",
	"vegan",
	"gluten",
	"bacon",
	"cranberry",
	"buttermilk",
];

var global_names = [
	"Caramel Pecan",
	"Maple Apple Pecan",
	"Original",
	"Original(Vegan)",
	"Original(Gluten-Free)",
	"Bacon",
	"Cranberry",

];

window.onload = function(){
	console.log("Checking to see if this works");
	var table = document.getElementById("productContainer");
	console.log(table);

	// var row = 3;
	// for(var row = 0; row < 5; row++){

	// }

	for(var i = 0; i < global_flavors.length; i++){
		var plus = document.createElement('svg');		
		var plusImage = document.createElement('img');
		plusImage.setAttribute("src", "resources/images/web/plus.svg");
		plusImage.setAttribute("onmouseover", "this.src=\'resources/images/web/plushover.svg\'");
		plusImage.setAttribute("onmouseout", "this.src=\'resources/images/web/plus.svg\'");
		plus.appendChild(plusImage);
		plus.id = i + "_plus";
		plus.classList.add('number');
		
		var minus = document.createElement('svg');
		var minusImage = document.createElement('img');
		minusImage.setAttribute("src", "resources/images/web/minus.svg");
		minusImage.setAttribute("onmouseover", "this.src=\'resources/images/web/minushover.svg\'");
		minusImage.setAttribute("onmouseout", "this.src=\'resources/images/web/minus.svg\'");
		minus.appendChild(minusImage);
		minus.id = i + "_minus";
		minus.classList.add('number');
		
		var counter = document.createElement('span');
		counter.innerHTML = "1";
		counter.id = i + "_counter";
		counter.classList.add('counter');

		var addToCart = document.createElement('button');
		addToCart.innerHTML = "Add";
		addToCart.id = i;
		addToCart.classList.add('addToCart');

		var image = document.createElement('img');
		image.id = i + "_image";
		image.src = "resources/images/web/rolls/" + global_flavors[i] + "@2x.jpg";
		image.classList.add('productImage');

		var label = document.createElement('span');
		label.innerHTML = global_names[i];
		label.classList.add('label');


		var product = document.createElement('div');
		product.classList.add('product');
		product.appendChild(label);
		product.appendChild(image);
		var cartContainer = document.createElement('div');
		cartContainer.classList.add('cartContainer');
		cartContainer.appendChild(plus);
		cartContainer.appendChild(minus);
		cartContainer.appendChild(counter);
		cartContainer.appendChild(addToCart);
		product.appendChild(cartContainer);

		table.appendChild(product);
	}
};