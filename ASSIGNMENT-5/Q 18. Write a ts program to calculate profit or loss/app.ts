var userInput:string | null = prompt("Enter the sale")
var sale:number = Number(userInput)
var userInput:string | null = prompt("Enter the expense")
var expense:number = Number(userInput)
if(sale>expense){
    console.log("Profit value is"sale - expense);
}
else if(sale<expense){
    console.log("Loss value is"expense - sale);
}
else{
    console.log("No Profit No Loss");
}