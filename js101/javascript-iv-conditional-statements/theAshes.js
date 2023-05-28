/*
You are given two numbers, scored in variables with the following names
Australia, England
If the following expression is true
Australia > England, print "Australia"
else if the following expression is true
Australia < England, print "England"
else if the following expression is true
Australia == England, print "Tie"
*/

function theAshes(Australia, England) {
    if (Australia > England) {
        console.log("Australia");
    } else if (Australia < England) {
        console.log("England");
    } else if (Australia == England) {
        console.log("Tie");
    }
}

theAshes(10, 10);
theAshes(10, 20);
theAshes(40, 30);