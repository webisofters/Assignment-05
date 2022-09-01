
//Question #4
//Write a ts program to check whether a number is divisible by 5 and 11 or not.
var userInput:string | null = prompt("Enter the Number")
var a:number = Number(userInput)


if(a % 5 ==0 && a % 11 == 0){
    console.log("Number is divisble by 5 & 11");
}
else{
    console.log("Number is not divisble by 5 & 11");
} 

