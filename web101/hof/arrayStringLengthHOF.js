/*
Given an array of strings print the length of each string

example : ["apple", "windows", "ubuntu"]
*/

let arrayOfStrings = ["apple", "windows", "ubuntu"];

let ans = arrayOfStrings.map((el)=>{
    return el.length;
})

console.log(ans);