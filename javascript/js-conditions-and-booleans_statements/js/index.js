console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD){
    console.log("Welcome! You are logged in as Brunhilde1984.");
}else{
    console.log("Access denied!")
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0){
    console.log("even number");
}else {
     console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let totalCost;
if (numberOfHotdogs  < 5){
    totalCost = numberOfHotdogs * 2
} else if (numberOfHotdogs < 100){
    totalCost = numberOfHotdogs * 1.5
} else if (numberOfHotdogs < 1000000) {
  totalCost = numberOfHotdogs * 1;
} else {
  totalCost = numberOfHotdogs * 0.1;
}

console.log(totalCost);

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17
  ? "Still need to learn..."
  : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

//const greeting = "Hello " + "//enter your code here" + "!";

const greeting = userName === "Archibald"
  ? "Hello Coach!"
  : `Hello ${userName}!`;
console.log(greeting);