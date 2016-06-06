var total = 0;

var subtotal = 0;

var tax = .065;

var isBlueClicked = false;

var subtotalBox = document.getElementById("subtotalBox");

var totalinput = document.getElementById("totalinput");

function addToCartBlue(price){

	if (isBlueClicked === false) {
	total = total + price;
	isBlueClicked = true;
	}
	else {
		total = total - price;
		isBlueClicked = false;
	}

	subtotalBox.innerHTML = total;
	totalinput.innerHTML = calclulateTotal();
}

function calclulateTotal() {
	var finalTotal = total;
	finalTotal = total * tax + total;
	return finalTotal;
}
