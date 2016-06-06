var total = 0;

var subtotal = 0;

var tax = .065;

var isBlueClicked = false;

var isOrangeClicked = false;

var isPinkClicked = false;

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
	totalinput.innerHTML = calculateTotal();
}

function addToCartPink(price){

	if (isPinkClicked === false) {
		total = total + price;
		isPinkClicked = true;
	}
	else {
		total = total - price;
		isPinkClicked = false;
	}

	subtotalBox.innerHTML = total;
	totalinput.innerHTML = calculateTotal();
}

function addToCartOrange(price){

	if (isOrangeClicked === false){
		total = total + price;
		isOrangeClicked = true;
	}
	else {
		total = total - price;
		isOrangeClicked = false;
	}

	subtotalBox.innerHTML = total;
	totalinput.innerHTML = calculateTotal()
}


function calculateTotal() {
	var finalTotal = total;
	finalTotal = total * tax + total;
	return finalTotal;
}
