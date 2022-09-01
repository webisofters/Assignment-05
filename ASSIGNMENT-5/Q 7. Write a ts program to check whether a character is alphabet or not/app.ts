//Question-7
//Write a ts program to check whether a character is alphabet or not.

var userInput:string|null = prompt("Enter any Charactor")
var char:string = String(userInput)
if(char >= 'a' || char >= "A"){
    console.log("Charactor is an Alphabet")
}
else {
    console.log("Charactor is not an Alphabet")
}