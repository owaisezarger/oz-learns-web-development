/*
Given an array of numbers generate an array containing the double value of the numbers

Sample Input [1, 2] Sample Output [2, 4]
*/

let array = [1, 2, 3, 4];

function doublingNumbersHOF(array){
    let doublingNumbersArray = array.map((el)=>{
        return el*2
    })
    return doublingNumbersArray;
}

console.log(doublingNumbersHOF(array));