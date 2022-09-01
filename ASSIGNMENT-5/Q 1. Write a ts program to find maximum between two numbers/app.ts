//Question #1
//Write a ts program to find maximum between two numbers.

var userInput:string | null = prompt("Enter the Number")
var num1:number = Number(userInput)
var userInput:string | null = prompt("Enter the Number")
var num2:number = Number(userInput)

if(num1 > num2){
    console.log("Maximum number is",num1);
}
else{
    console.log("Maximum number is",num2);
}

