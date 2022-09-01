//10. Write a ts program to check whether a character is uppercase or lowercase alphabet.

var userInput:string | null = prompt("Enter any Character")
var num:string = String(userInput)

if(num>="a"){
    console.log("Character is Lower Case")
}
else{
    console.log("Character is Uppercase")
}
