var userInput = prompt("Enter the sale");
var sale = Number(userInput);
var userInput = prompt("Enter the expense");
var expense = Number(userInput);
if (sale > expense) {
    console.log("Profit value is", sale - expense);
}
else if (sale < expense) {
    console.log("Loss value is", expense - sale);
}
else {
    console.log("No Profit No Loss");
}
