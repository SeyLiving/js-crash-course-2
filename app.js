//LOGICAL OPERATORS
let num1 = 10;
let num2 = 20;
let num3 = 10;
let word1 = "Hello";
let word2 = "hello";
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(!true);
console.log(!false);
console.log(num1 == num3);
console.log(num1 === num3); //equality check
console.log(word1 === word2);
console.log(word1 !== word2);


// CONTROL FLOW
let item = "Gino";
if (item === "Annapurna") {
    console.log("Buy Annapurna");
} else if (item === "U2") {
    console.log("Buy U2");
} else if (item === "A1") {
    console.log("Buy A1")
} else {
    console.log("Buy Rocky Salt")
}

// GRADING SYSTEM
let score = 80;
if (score >= 0 && score <= 100) {
    if (score >= 90) {
    console.log("Excellent")
} else if (score >= 80) {
    console.log("You Won")
} else if (score >= 70) {
    console.log("Good") 
} else if (score >= 60) {
    console.log("Average")
} else if (score >= 50) {
    console.log("Credit")
} else if (score >= 40) {
    console.log("Pass")
}else if (score >= 0) {
    console.log("Fail")}

} else {
    console.log("Please enter a valid number")
}

//FUNCTION
function sum(a, b){
    let total = a + b;
    return total;
}

let eleven = sum(5, 6);
let fifteen = sum(7, 8);
let nineteen = sum(9, 10);
console.log(fifteen)

function multiply(a, b = 4){
    let total = a * b;
    return total;
}

let twenty = multiply(5);
console.log(twenty)

//LOOPS
for (let i = 1; i <= 100; i++) {
    console.log(i + ". I will not steal fish from the soup again"); 
}

//WHILE LOOP
let num = 1; 
while (num <= 100) {
    console.log(num);

    num = num + 5;
}

// DO...WHILE LOOP
let age = 1;
do {
    console.log(age + ". You can't vote");
    age++;
} while (age < 18);

//ARRAY METHODS
let scores = [75, 45, 80, 65, 95, 55, 40, 70, 35];
for (let score of scores) {
    console.log(score);
    console.log(Math.pow(score, 2));
}

//FILTER
let pass = scores.filter((num) => num > 55)
console.log(pass)

// MAP
let squares = scores.map((score)=> score * score);
console.log(squares);

// FIND
let seventy = scores.find((score) => score == 70);
console.log(seventy);