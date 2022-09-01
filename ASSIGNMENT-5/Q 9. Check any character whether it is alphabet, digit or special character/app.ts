//9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
var alpha:string |null= prompt("enter any character")
var charac:string = String(alpha)

if(charac>='a'){
    console.log("Character is Alphabet");
    
}
else if(charac>='A'){
    console.log("Character is Alphabet");
}
else if(charac>="0"){
    console.log("Character is Digit");
}
else{
    console.log("Character is special character");
}