/* Create an array named products  with 3 products. */
const products = [
    {
        name: 'Cherry',
        price: 1.99,
        quantity: 0,
        productId: 1,
        image: '/starter/src/images/cherry.jpg'
    },
    {
        name: 'Orange',
        price: 1.99,
        quantity: 0,
        productId: 2,
        image: '/starter/src/images/orange.jpg'
    },
    {
        name: 'Strawberry',
        price: 1.99,  
        quantity: 0,
        productId: 3,
        image: '/starter/src/images/strawberry.jpg'
    }
];


/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* addProductToCart takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
const addProductToCart = (productId) => {
 const cartItem = cart.findIndex((item) => item.productId === productId);
 const product = products.find((element) => element.productId === productId);
 if (cartItem > -1) {
    cart[cartItem].quantity += 1;
 } else {
    product.quantity = 1;
    cart.push(product);    
 }

}

/* increaseQuantity takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

const increaseQuantity= (productId) => {
    const cartItem = cart.findIndex((item) => item.productId === productId);
    cart[cartItem].quantity += 1;
}


/* decreaseQuantity takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
const decreaseQuantity = (productId) => {
    const cartItem = cart.findIndex((item) => item.productId === productId);
    cart[cartItem].quantity -= 1;
    if ( cart[cartItem].quantity === 0) {
        cart.splice(cartItem, 1)
    }
} 


/*  removeProductFromCart takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
const removeProductFromCart = (productId) =>{
const cartItem = cart.findIndex((item) => item.productId === productId);
cart[cartItem].quantity = 0;
cart.splice(cartItem, 1);
}

/* cartTotal - no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
const cartTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) { 
        total += cart[i].price * cart[i].quantity;
    }
    total = +total.toFixed(2);
    return total;
}

/* emptyCart - empties the products from the cart */
const emptyCart = () => {
    cart.splice(0, cart.length);
}

// totalPaid - The total amount paid by the user
let totalPaid = 0;

/* pay - takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
const pay = (amount) => {
    totalPaid += amount;
    let balance = totalPaid - cartTotal();
    balance = +balance.toFixed(2);
    return balance;
}








/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
