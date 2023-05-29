/*
Given an array of string generate an array with their first characters

Sample Input - ["Masai", "School"]

Sample Output - ["M", "S"]
*/

let arrayOfStrings = ["Masai", "School"];

let ans = arrayOfStrings.map((el)=>{
    return el[0];
})


console.log(ans);