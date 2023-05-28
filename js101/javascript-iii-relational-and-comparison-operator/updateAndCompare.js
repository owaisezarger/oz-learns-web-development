/*
• You are given two numbers, stored in variables with the names num1 and num2
• Print the output of the following operation
num1 > num2, this prints true if num1 is greater than num2, else it prints false
• After this operation is performed, another number, stored in a variable with name num3 is added to num1. After this, print the result of the following operation again
num1 > num2, this prints true if num1 is greater than num2, else it prints false
*/
function updateAndCompare(num1, num2, num3) {
    // Write code here  
    if(num1 > num2){
        console.log(true);
    }else{
       console.log(false);
    }
    
    num1 = num1 + num3;
    
    if(num1 > num2){
       console.log(true);
    }else{
        console.log(false);
    }
}
updateAndCompare(4,8,5);
