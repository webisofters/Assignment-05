//Question-6
//Write a ts program to check whether a year is leap year or not.
var userInput = prompt("Enter any number");
var num = Number(userInput);
if (num % 4 == 0) {
    console.log("Year is Leap Year");
}
else {
    console.log("Year is Not Leap Year");
}
