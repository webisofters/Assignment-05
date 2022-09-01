//Question-5
//Write a ts program to check whether a number is even or odd.

var userInput:string | null = prompt("Enter any number")
var num:number = Number(userInput)
if(num % 2 == 0){
    console.log("Number is Even")
}
else{
    console.log("Number is Odd")
}