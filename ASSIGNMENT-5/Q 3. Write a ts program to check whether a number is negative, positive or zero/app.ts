//Question #3
//Write a ts program to check whether a number is negative, positive or zero.

var userInput:string | null = prompt("Enter the Number")
var a:number = Number(userInput)




if (a > 0){
    console.log("A is Positive")
}
else if(a<0){
    console.log("A is Negative")
}
else{
    console.log("A is Equal to zero")
}


