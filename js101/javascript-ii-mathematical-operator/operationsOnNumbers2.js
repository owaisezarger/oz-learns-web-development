/*
• You are given a number stored in a variable with the name N, an
d another number stored in a variable with the name M
• You have to perform the following operations on the value stored
in N
Multiply the value stored in N with 40
Add 20 to the value stored in N
Subtract 50 from the value stored in N
• You are given another number stored in the variable M
• If the value after of after performing the above operations is grea
ter than M, print Greater! , else if the value is equal, print Equa
1! , else print Lesser!
• For example, consider the value stored in N = 5, and the value st
ored in M = 10
• Then, after performing the above operation, the value stored in
N becomes
N = N * 40 = 200
N=N + 20 = 220
N = N - 50 = 170
• Now, the value stored in M is 10, which is lesser than the value st
ored in N. Therefore, the output is Greater!
*/
function numberOperation(N,M)
{
    // Write your code here! 
    N = N*40;
    N = N+20;
    N = N-50;
    if(N>M){
        return "Greater!"
    }else if(N === M){
        return "Equal!"
    }else{
        return "Lesser!"
    }
}

let ans = numberOperation(5,10);
console.log(ans);