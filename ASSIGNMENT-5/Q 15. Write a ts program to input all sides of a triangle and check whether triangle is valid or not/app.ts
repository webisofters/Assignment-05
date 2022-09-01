//15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
var input:string|null=prompt("Enter 1st side")
var firstSide:number=Number(input)
var input:string|null=prompt("Enter 2nd side")
var secondSideSide:number=Number(input)
var input:string|null=prompt("Enter 3rd side")
var thirdSide:number=Number(input)

if(firstSide+secondSideSide>thirdSide && firstSide+thirdSide>secondSideSide && secondSideSide+thirdSide>firstSide){
    console.log("Triangle is valid");
    
}
else{
    console.log("Trianle is not valid")
}