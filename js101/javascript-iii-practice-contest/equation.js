/*
Six variables are give as per the following details:
a=5
b=7
c=90
d=60
e=20
f=10
Find the value of equation 2x+5y+10*z, where:
x= a raised to the power of b.
y= sum of c and e.
z= product of d and f.
*/

function equation(x, y, z){
    return (2 * x ) + (5 * y) + (10 * z);
}
let a = 5;
let b = 7;
let c = 90;
let d = 60;
let e = 20;
let f = 10;

let x = a**b;
let y = c + e;
let z = d*f;

let ans = equation(x,y,z);
console.log(ans);