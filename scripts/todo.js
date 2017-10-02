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

window.onload = function(){
	var table = document.getElementById("productContainer");
	var firstRow = document.createElement('div');
	firstRow.classList.add('productRow');
	table.appendChild(firstRow);

	var i = 0;
	while(i < 15){
		var currentRow = table.lastChild;
		if(typeof currentRow.children != 'undefined' && currentRow.children.length == 3){
			currentRow = document.createElement('div');
			currentRow.classList.add('productRow');
			table.appendChild(currentRow);
		}
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
		image.addEventListener('click', function(){
			var id = this.id;
			var scraped = id.split("_")[0];
			var name = document.getElementById('detailName');
			name.innerHTML = global_names[scraped];
			var productimg = document.getElementsByClassName('detailImage')[0];
			productimg.src = "resources/images/web/rolls/" + global_flavors[scraped] + "@2x.jpg";
			var detailAdd = document.getElementsByClassName("detailAdd")[0];
			var modal = document.getElementById('detailModal');
			modal.style.display = "block";
			var span = document.getElementById("detailClose");
			span.onclick = function(){
				modal.style.display = "none";
			}
			window.onclick = function(event){
				if(event.target == modal){
					modal.style.display = "none";
				}
			}
		});

		var labelContainer = document.createElement('div');
		labelContainer.classList.add('labelContainer');
		var label = document.createElement('span');
		label.innerHTML = global_names[i];
		label.classList.add('label');
		labelContainer.appendChild(label);


		var product = document.createElement('div');
		product.classList.add('product');
		product.appendChild(labelContainer);
		product.appendChild(image);
		var cartContainer = document.createElement('div');
		cartContainer.classList.add('cartContainer');
		cartContainer.appendChild(plus);
		cartContainer.appendChild(minus);
		cartContainer.appendChild(counter);
		cartContainer.appendChild(addToCart);
		product.appendChild(cartContainer);

		currentRow.appendChild(product);

		i++;
	}
	i=0;
};