/*
Given an array of numbers print the product of all numbers
Sample Input - [2,3,4] Sample Output - 24
*/

/*
REDUCE HOF
In JavaScript, the reduce function is a higher-order function that allows you to reduce 
an array to a single value by applying a specified function to each element of the array. 
The reduce function takes two arguments: the reducer function and an optional initial value.
array.reduce(reducer, initialValue);

In below example reducer function is 
(acc,el)=>{ 
    //acc is accumulator and el is currentValue
    return acc * el;
}
and initialValue is 1

result get stored in acc

*/
let array = [2, 3, 4];

function productOfNumbersHOF(array) {
    let result = array.reduce((acc,el)=>{
        return acc * el;
    },1)
    return result;
}

console.log(productOfNumbersHOF(array));