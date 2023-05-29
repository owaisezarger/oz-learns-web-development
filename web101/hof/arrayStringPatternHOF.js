/*
Given an array of string generate an array whose first or last character is a
Sample Input - ["assignment", "problem", "media", "upload"]
Sample Output - ["assignment", "media"]
*/

let array = ["assignment", "problem", "media", "upload"];
let ans = array.filter((el)=>{
    return el[0]==="a" || el[el.length-1] === 'a';
    // return el.charAt(0)=="a" || el.charAt(el.length-1)=="a"
})
console.log(ans);