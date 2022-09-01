//21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
//For first 50 units Rs. 0.50/unit
//For next 100 units Rs. 0.75/unit
//For next 100 units Rs. 1.20/unit
//For unit above 250 Rs. 1.50/unit
//An additional surcharge of 20% is added to the bill
var userInput = prompt("Enter the Units");
var units = Number(userInput);
if (units <= 50) {
    console.log("Electricity Bill is", (units * .50) + ((units * .50) * 20 / 100));
}
else if (units > 50 && units <= 150) {
    console.log("Electricity Bill is", ((50 * .50) + ((units - 50) * .75)) + (((50 * .50) + ((units - 50) * .75)) * 20 / 100));
}
else if (units > 150 && units <= 250) {
    console.log("Electricity Bill is", ((50 * .50) + (100 * .75) + ((units - 150) * 1.2) + ((50 * .50) + (100 * .75) + ((units - 150) * 1.2)) * 20 / 100));
}
else if (units > 250) {
    console.log("Electricity Bill is", ((50 * .50) + (100 * .75) + (100 * 1.20) + ((units - 250) * 1.50)) + (((50 * .50) + (100 * .75) + (100 * 1.20) + ((units - 250) * 1.50)) * 20 / 100));
}
else {
    console.log("Not in the slab");
}
