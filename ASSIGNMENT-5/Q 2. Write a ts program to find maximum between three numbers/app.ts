
// Question #2
// Write a ts program to find maximum between three numbers.
var userInput:string | null = prompt("Enter the x")
var x:number = Number(userInput)
var userInput:string | null = prompt("Enter the y")
var y:number = Number(userInput)
var userInput:string | null = prompt("Enter the z")
var z:number = Number(userInput)

if (x > y && x >z){
    console.log("Maximum number is",x);
}
else if(y > z && y > x){
    console.log("Maximum number is",y);
}
else{
    console.log("Maximum number is",z);
}

