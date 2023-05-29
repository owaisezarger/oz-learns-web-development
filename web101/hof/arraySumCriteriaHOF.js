/*
Given an array of numbers, return the elements that have even index (starting the count at 0) and are even
Use Higher-order functions
Sample Input - [2, 4, 5, 3, 6, 8]
Sample Output - [2, 6]
*/

let input = [2, 4, 5, 3, 6, 8];

let output = input.filter((el,i)=>{
    if(i%2 ===0){
        return el % 2 === 0;
    }
})

console.log(output);