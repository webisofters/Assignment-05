//17. Write a ts program to find all roots of a quadratic equation.
var a = Number(prompt("Enter first value"));
var b = prompt("Enter second value");
var c = Number(prompt("Enter third value "));
if (a == 0) {
    console.log("Invalid");
    console.log("Solution can't find");
}
var d = b * b - 4 * a * c;
var sqrt_val = Math.sqrt(Math.abs(d));
if (d > 0) {
    console.log("Roots are real and different \n" + "<br/>");
    console.log((-b + sqrt_val) / (2 * a) + "<br/>"
        + (-b - sqrt_val) / (2 * a));
}
else if (d == 0) {
    console.log("Roots are real and same \n" + "<br/>");
    console.log(-b / (2 * a) + "<br/>"
        + -b / (2 * a));
}
else {
    var z = -b / (2 * a);
    var zz = sqrt_val / (2 * a);
    var zzz = -b / (2 * a);
    var za = sqrt_val / (2 * a);
    console.log("Roots are complex \n");
    console.log(z + " + i" + zz + "\n" + zzz + " - i" + za);
}
