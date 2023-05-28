/*
Given an array of numbers find the sum of cubes if the number is divisible by 3 
Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)
*/
let array = [1, 2, 3, 4, 5, 6];

function sumOfCubesHOF(array){
    let sum = array.reduce((acc,el)=>{
        let cube = el*el*el;
        if(cube % 3 === 0){
            acc += cube;
        }
        return acc;
    },0) //need to speicify initialvalue of acc because addition and multiplication both are present in function.
    return sum;
}

console.log(sumOfCubesHOF(array));