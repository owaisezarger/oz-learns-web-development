/*
You are given two numbers, stored in the variable with the name x and y
Calculate the sum of x and y as sum = x + y
if sum > 5, Then print "Above 5"
else If sum < 5, then print "Below 5"
else print "Equal 5"
*/

function equal5(x, y) {
    let sum = x + y;
    if (sum > 5) {
        console.log("Above 5");
    } else if (sum < 5) {
        console.log("Below 5");
    } else {
        console.log("Equal 5");
    }
}

equal5(1, 2);
equal5(2, 3);
equal5(3, 4);