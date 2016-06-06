var total = 0;

var subtotal = 0;

var tax = .065;

var subtotalBox = document.getElementById("subtotal");

function addToCart(price){
	total = total + price;
	subtotalBox.innerHTML = total;
}



