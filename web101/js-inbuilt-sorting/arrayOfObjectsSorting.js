/*
Let us consider an array of objects

Sort this array by its firstname(ascending & descending)

Sort this array by age (ascending & descending)
*/

let employees = [
    {
        firstName: 'john',
        lastName: 'doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'aana',
        lastName: 'rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'zion',
        lastName: 'albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

function ascendingSortName(employees){
    let ans = employees.sort((a,b)=>{
        return a.firstName.localeCompare(b.firstName)
    })
    return ans;
}

function descendingSortName(employees){
    let ans = employees.sort((a,b)=>{
     return b.firstName.localeCompare(a.lastName)
    })
    return ans;
}

function ascendingSortAge(employees){
    let ans = employees.sort((a,b)=>{
        return a.age - b.age;
    })
    return ans;
}

function descendingSortAge(employees){
    let ans = employees.sort((a,b)=>{
        return b.age - a.age;
    })
    return ans;
}

console.log(ascendingSortName(employees))
console.log(descendingSortName(employees))
console.log(ascendingSortAge(employees))
console.log(descendingSortAge(employees))
