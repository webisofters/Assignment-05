// Question #2
// Write a ts program to find maximum between three numbers.
var userInput = prompt("Enter the x");
var x = Number(userInput);
var userInput = prompt("Enter the y");
var y = Number(userInput);
var userInput = prompt("Enter the z");
var z = Number(userInput);
if (x > y && x > z) {
    console.log("Maximum number is", x);
}
else if (y > z && y > x) {
    console.log("Maximum number is", y);
}
else {
    console.log("Maximum number is", z);
}
