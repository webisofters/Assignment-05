//Question #3
//Write a ts program to check whether a number is negative, positive or zero.
var userInput = prompt("Enter the Number");
var a = Number(userInput);
if (a > 0) {
    console.log("A is Positive");
}
else if (a < 0) {
    console.log("A is Negative");
}
else {
    console.log("A is Equal to zero");
}
