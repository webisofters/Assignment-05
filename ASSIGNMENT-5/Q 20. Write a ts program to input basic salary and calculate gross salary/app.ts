//20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
//Basic Salary <= 10000 : HRA = 20%, DA = 80%
//Basic Salary <= 20000 : HRA = 25%, DA = 90%
//Basic Salary > 20000 : HRA = 30%, DA = 95%

var userInput:string | null = prompt("Enter the Basic salary")
var basicSalary:number = Number(userInput)
if(basicSalary<=10000){
    console.log("Gross Salary is",basicSalary+(basicSalary*20/100)+(basicSalary*80/100))
}
else if(basicSalary<=20000){
    console.log("Gross Salary is",basicSalary+(basicSalary*25/100)+(basicSalary*90/100))
}
else if(basicSalary>20000){
    console.log("Gross Salary is",basicSalary+(basicSalary*30/100)+(basicSalary*95/100))
}
else{
    console.log("Not in given slab")
}