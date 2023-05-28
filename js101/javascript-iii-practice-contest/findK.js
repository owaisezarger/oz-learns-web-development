/*
You are given a number K. Find the value of K, after doing the following operations:
1. K is multiplied by 7
2. 10 is added in the new value of K.
3. K is divided by 2 (print floor value).
*/
function findK(K) {
	//write your code here
    return ((K * 7) + 10) / 2;
}

let ans = findK(10);
console.log(ans);