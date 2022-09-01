//14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
//riangle is valid if sum of its two sides is greater than the third side
var input = prompt("Enter 1st length");
var firstLength = Number(input);
var input = prompt("Enter 2nd length");
var secondLength = Number(input);
var input = prompt("Enter 3rd length");
var thirdLength = Number(input);
if ((firstLength + secondLength + thirdLength) == 180) {
    console.log("Triangle is valid");
}
else {
    console.log("Triangle is not valid");
}
