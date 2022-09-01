//Question-6
//Write a ts program to check whether a year is leap year or not.

var userInput:string | null = prompt("Enter any number")
var num:number = Number(userInput)
if(num % 4 ==0){
    console.log("Year is Leap Year")
}
else{
    console.log("Year is Not Leap Year")
}