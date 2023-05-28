/*
• You are given seven numbers, stored in the variable with the following names
a,b, c,d,e, f, g
• You have to declare two variables, sum1 and sum2, such that sum1 = (a + b) * c and sum2 = (d + e + f + g)
• Print the output of the following operation
sum1 > sum2
*/

function compareSevenNumbers(a,b,c,d,e,f,g) {
    // Write code here
    let sum1 = (a+b)*c;
    let sum2 = (d+e+f+g);

    if(sum1 > sum2){
        console.log(true);
    }else{
        console.log(false);
    }
}
compareSevenNumbers(1,2,3,4,5,6,7)