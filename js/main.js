var total = 0;

var subtotal = 0;

var tax = .065;

var isBlueClicked = false;

var isOrangeClicked = false;

var isPinkClicked = false;

var isCartClicked = false;

var subtotalBox = document.getElementById("subtotalBox");

var totalinput = document.getElementById("totalinput");

var cart1 = document.getElementById("cart1");

var cart2 = document.getElementById("cart2");

var cart3 = document.getElementById("cart3");



cart1.addEventListener("click",function(){
  if(isCartClicked == false)
  {
    cart1.className = 'active subbox';
    isCartClicked = true;
  }
  else
  {
    cart1.className = 'subbox';
    isCartClicked = false;
  }

})


cart2.addEventListener("click",function(){
  if(isCartClicked == false)
  {
    cart2.className = 'active subbox';
    isCartClicked = true;
  }
  else
  {
    cart2.className = 'subbox';
    isCartClicked = false;
  }

})


cart3.addEventListener("click",function(){
  if(isCartClicked == false)
  {
    cart3.className = 'active subbox';
    isCartClicked = true;
  }
  else
  {
    cart3.className = 'subbox';
    isCartClicked = false;
  }

})

function addToCartBlue(price){

	if (isBlueClicked === false) {
	total = total + price;
	cart = 'active';
	isBlueClicked = true;
	}
	else {
		total = total - price;
		cart = 'unactive';
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
