/*
• You are given five numbers, stored in variables with the following
names
one, two, three, four, five, six
The value stored in the variable two, five, six has been doubled, s
uch that if initially the value was 3, it has become 6
The value stored in the variable three, four has been increased thre
e times, such that if initially it was 3, it has become 9
The value stored in the variable one has not been changed.
Find the sum of the updated values stored in one, two, three, fou
r, five, six
*/
function infinityStones(one, two, three, four, five, six) {
    //Write code here
    return (one)+(two*2)+(three*3)+(four*3)+(five*2)+(six*2);
}

let ans = infinityStones(1,2,3,4,5,6);
console.log(ans);