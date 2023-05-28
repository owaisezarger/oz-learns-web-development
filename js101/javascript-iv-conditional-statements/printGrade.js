/*
You are given a number, stored in the variable with the name total
If the following expression is true
total == 100, print "A", without quotes
Else if the following expression is true,
total >= 90, print "B", without quotes
Else if the following expression is true,
total >= 80, print "C", without quotes
Else, print "F", without quotes
*/
function printGrade(total){
    if(total == 100){
        console.log("A");
    }
    else if(total >= 90){
            console.log("B");
        }
    else if(total >= 80){
            console.log("C");
        }
        else{
            console.log("F");
        }
}
printGrade(100);
printGrade(90);
printGrade(80);
printGrade(50);