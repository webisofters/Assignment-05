//11. Write a ts program to input week number and print week day.
//Let assume Saturday is 1st day of weel
var input = prompt("Enter Week Number");
var number = Number(input);
if (number == 1) {
    console.log("Week day is Saturday");
}
else if (number == 2) {
    console.log("Week day is Sunday");
}
else if (number == 3) {
    console.log("Week day is Monday");
}
else if (number == 4) {
    console.log("Week day is Tuesday");
}
else if (number == 5) {
    console.log("Week day is wednesday");
}
else if (number == 6) {
    console.log("Week day is Thursday");
}
else if (number == 7) {
    console.log("Week day is Friday");
}
else {
    console.log("Please enter correct number");
}
