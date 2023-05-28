/*
Given an array of numbers extract the numbers which are odd

Sample Input - [1,2,3] Sample Output - [1,3]
*/

let array = [1, 2, 3, 4, 5];

function extractOddHOF(array) {
    let result = array.filter((el)=>{
        return el % 2!== 0;
    })
    return result;
}

console.log(extractOddHOF(array));
