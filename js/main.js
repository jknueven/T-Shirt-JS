var subtotalBox = document.getElementById("subtotalBox");

var totalinput = document.getElementById("totalinput");

var cart1 = document.getElementById("cart1");

var cart2 = document.getElementById("cart2");

var cart3 = document.getElementById("cart3");

var pinkTeeShirt = {
  color:'pink',
  price:19,
  inCart: false,
}

var blueTeeShirt = {
  color:'blue',
  price:29,
  inCart: false,
}

var orangeTeeShirt = {
  color:'orange',
  price:39,
  inCart: false,
}

var cart = [];

function addToCart(color,price){
  if (color === 'blue' && blueTeeShirt.inCart === false){
  cart.push(blueTeeShirt);
  cart1.className = 'active subbox';
  blueTeeShirt.inCart = true;  
  }
  else if (color === 'blue' && blueTeeShirt.inCart === true){
  var arrayLocation = cart.indexOf(blueTeeShirt);
  cart.splice(arrayLocation,1);
  cart1.className = 'subbox';
  blueTeeShirt.inCart = false;  
  }
  else if (color === 'pink' && pinkTeeShirt.inCart ===false){
  cart.push(pinkTeeShirt);
  cart2.className = 'active subbox';
  pinkTeeShirt.inCart = true;
  }
  else if (color === 'pink' && pinkTeeShirt.inCart === true){
  var arrayLocation = cart.indexOf(pinkTeeShirt);
  cart.splice(arrayLocation,1);
  cart2.className = 'subbox';
  pinkTeeShirt.inCart = false;  
  }
  else if (color === 'orange' && orangeTeeShirt.inCart === false){
  cart.push(orangeTeeShirt);
  cart3.className = 'active subbox';
  orangeTeeShirt.inCart = true;
  }
  else if (color === 'orange' && orangeTeeShirt.inCart === true){
  var arrayLocation = cart.indexOf(orangeTeeShirt);
  cart.splice(arrayLocation,1);
  cart3.className = 'subbox';
  orangeTeeShirt.inCart = false;  
  }
 document.getElementById("subtotalBox").innerHTML = getSubTotal();
 document.getElementById('totalinput').innerHTML = getTotal();
}

function getSubTotal(){
  var subTotal = 0;
  cart.forEach(function(shirt)
  {
    subTotal= shirt.price + subTotal;
  });

  return subTotal;
}

function getTotal(){
  var subTotal = getSubTotal(); 
  Total= subTotal * 0.065 + subTotal;
  return Total; 
}

// cart1.addEventListener("click",function(){
//   if(blueTeeShirt.inCart == false)
//   {
//     cart1.className = 'active subbox';
//     isCartClicked = true;
//   }
//   else
//   {
//     cart1.className = 'subbox';
//     isCartClicked = false;
//   }

// })

// cart2.addEventListener("click",function(){
//   if(isCartClicked == false)
//   {
//     cart2.className = 'active subbox';
//     isCartClicked = true;
//   }
//   else
//   {
//     cart2.className = 'subbox';
//     isCartClicked = false;
//   }

// })

// cart3.addEventListener("click",function(){
//   if(isCartClicked == false)
//   {
//     cart3.className = 'active subbox';
//     isCartClicked = true;
//   }
//   else
//   {
//     cart3.className = 'subbox';
//     isCartClicked = false;
//   }

// })