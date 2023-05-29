/*
Let us consider an array of strings

let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
Sort this array in ascending and descending order using compare function
*/

let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];

function ascendingSort(animals) {
    let ans = animals.sort((a,b)=>{
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
    return ans;
}

function descendingSort(animals) {
    let ans = animals.sort((a,b)=>{
        if(a > b) return -1;
        if(a < b) return 1;
        return 0;
    })
    return ans;
}

console.log(ascendingSort(animals));
console.log(descendingSort(animals));