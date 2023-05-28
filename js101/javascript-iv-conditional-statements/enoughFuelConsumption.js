/*
You are given two numbers, stored in the variable with the following names
fuel, distance
Find the value of required, such that
required = fuel×distance
If the value of required is greater than 50, print Enough, else print Go On
*/

function enoughFuelConsumption(fuel, distance) {
    let required = fuel * distance;
    if (required > 50) {
        console.log("Enough");
    } else {
        console.log("Go On");
    }
}

enoughFuelConsumption(10, 6);
enoughFuelConsumption(4, 10);