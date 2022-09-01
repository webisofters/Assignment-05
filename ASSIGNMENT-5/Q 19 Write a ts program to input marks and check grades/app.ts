//19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
//Percentage >= 90% : Grade A
//Percentage >= 80% : Grade B
//Percentage >= 70% : Grade C
//Percentage >= 60% : Grade D
//Percentage >= 40% : Grade E
//Percentage < 40% : Grade F

var userInput:string | null = prompt("Enter the Physics Marks")
var Physics:number = Number(userInput)
var userInput:string | null = prompt("Enter the Chemistry Marks")
var Chemistry:number = Number(userInput)
var userInput:string | null = prompt("Enter the Biology Marks")
var Biology:number = Number(userInput)
var userInput:string | null = prompt("Enter the Mathematics Marks")
var Mathematics:number = Number(userInput)
var userInput:string | null = prompt("Enter the Computer Marks")
var Computer:number = Number(userInput)
var obtainedMarks:number = Physics + Chemistry + Biology + Mathematics + Computer
var averageMarks:number = (Physics + Chemistry + Biology + Mathematics + Computer)/5
if(averageMarks>=90){
    console.log("Grade is A")
}
else if(averageMarks>=80){
    console.log("Grade is B")
}
else if(averageMarks>=70){
    console.log("Grade is C")
}
else if(averageMarks>=60){
    console.log("Grade is D")
}
else if(averageMarks>=40){
    console.log("Grade is E")
}
else if(averageMarks<=40){
    console.log("Grade is F")
}
else {
    console.log("Not in grade A, B, c, d, e & F")
}