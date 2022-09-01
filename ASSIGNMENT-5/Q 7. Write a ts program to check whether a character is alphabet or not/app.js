//Question-6
//Write a ts program to check whether a character is alphabet or not.
var userInput = prompt("Enter any Charactor");
var char = String(userInput);
if (char >= 'a' || char >= "A") {
    console.log("Charactor is an Alphabet");
}
else {
    console.log("Charactor is not an Alphabet");
}
