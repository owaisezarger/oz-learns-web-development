/*
Description
• You are given a number, stored in a variable with the name numb
er . Perform the following operations on the value stored in the
number
1. Multiply the value by 3
2. Add 7 after it
3. Subtract 10 from it
After performing all the above operations, print the updated value
*/

function operationOnNumbers(number) {
    // Write code here
  let ans = number * 3;
  ans = ans + 7;
  ans = ans - 10;
  return ans;
}

let x = operationOnNumbers(4)
console.log(x);