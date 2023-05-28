/*
You are given two numbers n and m, you need to check if cube of n is greater than square of m.
*/
function cubeAndSquare(n,m) {
    //write code here
    if(n*n*n > m*m*m)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let ans = cubeAndSquare(2,3); 
console.log(ans);