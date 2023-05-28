// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4

let array = [1,2,3,4];

function sumOfOddsHOF(array){
    let result = array.reduce((acc,el)=>{
        if(el%2!==0){
            acc+=el;
        }
        return acc;
    })
    return result;
}

console.log(sumOfOddsHOF(array));