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