// Given an array of numbers print the square of those numbers
let arr = [2,3,4,5];

function squareHOF(arr){
  let squaredArray =  arr.map((el)=>{
        return el*el;
    })
    return squaredArray;
}

let ans = squareHOF(arr);
console.log(ans);

