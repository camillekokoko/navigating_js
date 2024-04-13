console.log("hi");

function codingBoss() {
    // This is an alert for when the codingBOss fucntion is called
    // alert("hey you!");
    document.querySelector('h1').style.color = "hotpink"; 
}
codingBoss();

console.log("Hello World");

console.log(2 + 5);

//Assignment 2 : VARIABLES AND DATA TYPES
let customerName = "Camille";
let coffeeName = "Flat White";
let coffeePrice = 4.5;
let isCoffeeHot = true;


function serveCoffee() {
    let sugar = true;
    let size = "Medium";
    let shot = 1;
    let isDecaf = false;
    console.log("Preparing", size, shot, coffeeName, isDecaf);
    console.log("Adding sugar:", sugar);
    console.log("Serving coffee to the customer...");
}

console.log("Customer Name:", customerName.toUpperCase());
console.log("Coffee Name:", coffeeName);
console.log("Coffee Price:", coffeePrice);
console.log("Is Coffee Hot:", isCoffeeHot);

serveCoffee();

console.clear();

console.warn(`${customerName}, your coffee is ready`);

//
let customerName = "Camille";
let coffeeName = "Flat White";
let coffeePrice = 4.5;
let isCoffeeHot = true;

function serveCoffee() {
    let sugar = true;
    let size = "Medium";
    let shot = 1;
    let isDecaf = false;

    // Output coffee details
    console.log("Preparing", size, shot, coffeeName, isDecaf ? "(decaf)" : "");
    console.log("Adding sugar:", sugar);
    console.log("Serving coffee to the customer...");

    // Return coffee price
    return coffeePrice;
}

// Output customer details
console.log("Customer Name:", customerName.toUpperCase());
console.log("Coffee Name:", coffeeName);
console.log("Coffee Price:", coffeePrice);
console.log("Is Coffee Hot:", isCoffeeHot);

// Serve coffee
let price = serveCoffee();

// Control flow statement
if (price > 3) {
    console.log("The coffee is relatively expensive.");
} else {
    console.log("The coffee is reasonably priced.");
}

// Block statement
{
    let discount = 0.5; // 50% discount
    let finalPrice = price - discount;
    console.log(`After applying a discount of $${discount}, the final price is $${finalPrice}.`);
}

// Nested if/else statement
let temperature = 80; // Temperature in Fahrenheit
if (temperature >= 70) {
    console.log("It's a warm day. Enjoy your coffee!");
} else {
    if (isCoffeeHot) {
        console.log("It's a bit chilly, but your coffee is hot and comforting!");
    } else {
        console.log("It's a bit chilly. Enjoy your coffee!");
    }
}
// WEB APIS
function placeCoffeeOrder() {
    console.log("Welcome to the Coffee Shop!")

    setTimeout(function() {
        console.log("step 1: choose your coffee type");
    }, 2000); // 2sec

    setTimeout(function() {
        console.log("step 2: choose your coffee size");
    }, 4000); // 4sec

    setTimeout(function() {
        console.log("step 3: add extras sugar milk shot");
    }, 6000); // 6sec

    setTimeout(function() {
        console.log("step 4: pay for your order");
    }, 8000); // 8sec

    setTimeout(function() {
        console.log("step 5: your order is ready! Enjoy");
    }, 10000); // 10sec

    var orderInterval = setInterval(function() {
        console.log("Checking order status ....");
    }, 2000); //check every 2 sec

    setTimeout(function() {
        clearInterval(orderInterval)
        console.log("Order serverd. Stop checking.");
    }, 12000); // 2 sec after served

}

placeCoffeeOrder();

console.log(window.location);

console.log(window.history);

window.history.back();
window.history.forward(); 


function storeDataInLocalStorage() {
    localStorage.setItem("customerName", "John Doe");
    localStorage.setItem("orderType", "Latte");
    localStorage.setItem("orderSize", "Medium");
}

storeDataInLocalStorage();

console.log(localStorage.getItem("customerName"));
console.log(localStorage.getItem("orderType"));
console.log(localStorage.getItem("orderSize"));