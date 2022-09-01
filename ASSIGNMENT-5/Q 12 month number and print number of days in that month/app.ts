//12. Write a ts program to input month number and print number of days in that month.


var monthNumber:string | null = prompt("Enter Month Number")
var month:number = Number(monthNumber)
if(month==1){
    console.log("Number of days are 31")
}
else if(month==2){
    console.log("Number of days are 28")
}
else if(month==3){
    console.log("Number of days are 31")
}
else if(month==4){
    console.log("Number of days are 30")
}
else if(month==5){
    console.log("Number of days are 31")
}
else if(month==6){
    console.log("Number of days are 30")
}
else if(month==7){
    console.log("Number of days are 31")
}
else if(month==8){
    console.log("Number of days are 31")
}
else if(month==9){
    console.log("Number of days are 30")
}
else if(month==9){
    console.log("Number of days are 30")
}
else if(month==10){
    console.log("Number of days are 31")
}
else if(month==11){
    console.log("Number of days are 30")
}
else if(month==12){
    console.log("Number of days are 31")
}
else{
    console.log("Please choose correct month")
}