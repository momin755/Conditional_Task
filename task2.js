/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
var number = 70;
if(number >= 90 && number <=100){
    console.log("A");
}
else if(number <= 89 && number >= 80){
    console.log("B");
}
else if(number <= 79 && number >= 70){
    console.log("C");
}
else if(number <= 69 && number >= 60){
    console.log("D");
}
else{
    console.log("Fail");
}