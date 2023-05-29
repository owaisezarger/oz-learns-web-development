/*NUMBER SORT (ASCENDING & DESCENDING)
Let us consider an array of numbers

 let numbers = [0, 1 , 2, 30, 10, 25, 40, 30 ];
Sort this array in ascending and descending order using compare function
*/

let numbers = [0, 1 , 2, 30, 10, 25, 40, 30 ];

function ascendingSort(numbers) {
    let ans = numbers.sort((a,b)=>{
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    return ans;
}

function descendingSort(numbers) {
    let ans = numbers.sort((a,b)=>{
        if(a > b) return -1;
        if(a < b) return 1;
        return 0;
    });
    return ans;
}

console.log(ascendingSort(numbers));
console.log(descendingSort(numbers));

/* explaination
The provided code is sorting the array numbers in ascending order. Here's how it works:

The sort() method is used to sort the elements of the array in place. It takes a comparison function as an argument to determine the sorting order.

The comparison function is defined as an anonymous function:

function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}
This function compares two values a and b that are being compared during the sorting process.The comparison function returns different values depending on the relationship between a and b.

If a is greater than b, it returns 1, indicating that a should be placed after b in the sorted order.
If a is less than b, it returns -1, indicating that a should be placed before b in the sorted order.
If a and b are equal, it returns 0, indicating that their order should remain unchanged.
The sort() method uses the comparison function to compare pairs of elements in the array and rearranges them according to the return values of the comparison function.

As a result, when console.log(numbers) is executed after sorting, the array will be printed in ascending order:

[0, 1, 2, 10, 25, 30, 30, 40]
The numbers are sorted from the smallest (0) to the largest (40), which represents an ascending order.

*/