/*
• You are given two numbers stored in variables with the name N and M respectively
• You have to find the value of sum, such that sum = N^7 + M^7
• For example, consider the value stored in N = 2, and M = 3
• Therefore, N^7 = 2*2*2*2*2*2*2 = 128 , and M^7 = 3*3*3*3*3*3*3 = 2187
• Therefore, sum = 128 + 2187 = 2315, which is the required answer
*/
function powerAndSum(N,M){
    // Write your code here!
    return (N**7)+(M**7); 
    }
let ans = powerAndSum(2,3);    
console.log(ans);