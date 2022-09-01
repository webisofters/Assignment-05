//13. Write a ts program to count total number of notes in given amount.


let notes :any =prompt("Enter a number");

if(notes >= 5000){
    let a = Math.floor(notes/5000);
    console.log("5000 Notes = ",a );
    notes = notes%5000;
}
if( notes >=1000){
    let a = Math.floor(notes/1000);
    console.log("1000 Notes = ",a );
    notes = notes%1000;
}
if(notes >= 500){
    let a = Math.floor(notes/500);
    console.log("500 Notes = ",a );
    notes = notes%500;
}
if(notes >= 100){
    let a = Math.floor(notes/100);
    console.log("100 Notes = ",a );
    notes = notes%100;
}
if(notes >=50){
    let a = Math.floor(notes/50);
    console.log("50 Notes = ",a );
    notes = notes%50;
}
if(notes >=20){
    let a = Math.floor(notes/20);
    console.log("20 Notes = ",a );
    notes = notes%20;
}
if(notes >=10){
    let a = Math.floor(notes/10);
    console.log("10 Notes = ",a );
    notes = notes%10;
}
if(notes >=5){
    let a = Math.floor(notes/5);
    console.log("5 Notes = ",a );
    notes = notes%5;
}
if(notes >=2){
    let a = Math.floor(notes/2);
    console.log("2 Notes = ",a );
    notes = notes%2;
}
if(notes >=1){
    let a = Math.floor(notes/1);
    console.log("1 Notes = ",a );
    notes = notes%1;
}
