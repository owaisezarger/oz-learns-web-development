/*
• You are given five numbers, stored in the variables with the following name
one, two, three, four, five
• You have to declare another variable sum1, such that sum1 = one + two + three
• Also, you have to declare another variable sum2, such that sum2 = four + five
• Finally, you have to print the output of the following operation
sum1 > sum2 (This operation prints true, if suml is greater than sum2, else it prints false)
*/
function sumAndCompare(one, two, three, four, five) {
    // Write code here
    let sum1 = (one+two+three);
    let sum2 = (four+five);

    if(sum1 > sum2){
        console.log(true);
    }else{
        console.log(false);
    }
}
sumAndCompare(1,2,3,4,5)