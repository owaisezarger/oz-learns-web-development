/*
You are given two numbers stored in the variable with the names
distance, time
Find the value of speed, such that,
speed = distance/time
If the following expression is true
speed > 40, print "Apply Brake"
else
print "Keep Going"
Print the statements, without quotes
*/
function applyBrakes(distance, time) {
    let speed = distance/time;
    if (speed > 40) {
        console.log("Apply Brake");
    } else {
        console.log("Keep Going");
    }
}
applyBrakes(100, 2);
applyBrakes(200, 6);