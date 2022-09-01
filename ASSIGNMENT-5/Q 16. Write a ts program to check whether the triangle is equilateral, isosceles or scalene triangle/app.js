//16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
var input = prompt("Enter 1st side");
var firstSide = Number(input);
var input = prompt("Enter 2nd side");
var secondSide = Number(input);
var input = prompt("Enter 3rd side");
var thirdSide = Number(input);
//equilateral
if (firstSide == secondSide && secondSide == thirdSide && firstSide == thirdSide) {
    console.log("Trianle is equilateral");
}
//isosceles
else if (firstSide == secondSide && firstSide !== thirdSide || firstSide == thirdSide && firstSide !== secondSide || secondSide == thirdSide && secondSide !== firstSide) {
    console.log("Triable is isosceles");
}
//scalene
else if (firstSide !== secondSide && firstSide !== thirdSide) {
    console.log("Trianle is scalene");
}
else {
    console.log("Not in Slab");
}
