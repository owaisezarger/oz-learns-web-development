/*
• You are given four numbers, stored in the variables with the follo
wing names
one, two, three, four
• Perform the following operations on the four numbers
1. The value stored in one and two is doubled, such that, if it
was 2 initially, it becomes 4
2. The value stored in three is multiplied by 3, such that, if it
was 4, it becomes 12
3. The value stored in four, is increased by 4, such that if it w
as 7 initially, it becomes 11
Find the sum of the values stored in one, two, three, four, after t
he above operations are performed
*/
function doubleTwoTripleOne(one, two, three, four) {
    // Write code here
    return (one*2)+(two*2)+(three*3)+(four+4);
}
let ans = doubleTwoTripleOne(1,2,3,4);
console.log(ans);