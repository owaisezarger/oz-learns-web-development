/*
Given an array of strings print the sum of lengths if the characters in the string are odd
Sample Input - ["A", "Good", "Problem"]
Sample Output - 8
*/

let array = ["A", "Good", "Problem"];

let ans = array.filter((el)=>{
    return el.length % 2!== 0;
}).reduce((acc, el)=>{
    return acc.length + el.length;
})
console.log(ans);