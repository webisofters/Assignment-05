//17. Write a ts program to find all roots of a quadratic equation.

let a :any =Number(prompt("Enter first value"));
let b :any =prompt("Enter second value");
let c :any =Number(prompt("Enter third value "));

if (a == 0) {
    console.log("Invalid");
    console.log("Solution can't find");
}
let d : any = b * b - 4 * a * c;
let sqrt_val : any = Math.sqrt(Math.abs(d));
if (d > 0) {
            console.log("Roots are real and different \n" + "<br/>");
            console.log((-b + sqrt_val) / (2 * a) + "<br/>"
                         + (-b - sqrt_val) / (2 * a));
}
else if (d == 0) {
            console.log("Roots are real and same \n" + "<br/>");
              console.log(-b / (2 * a) + "<br/>"
                               + -b / (2 * a)) ;
        }
else {

    let z: any =-b / (2 * a) ;
    let zz : any = sqrt_val / (2 * a) ;
    let zzz : any = -b / (2 * a);
    let za : any = sqrt_val / (2 * a);

            console.log("Roots are complex \n");
            console.log( z + " + i" + zz + "\n"+zzz + " - i" + za) ;
}
