/*
You are given a number, stored in the variable with the name N
Print Yes, if the number is divisible by 4, else print No
Note: A number is divisible by 4, if the result of the following expression number % 4 == 0
*/

function divisibleBy4(N){
    if(N % 4 == 0){
        console.log("Yes");
    }else{
        console.log("No");
    }
}

divisibleBy4(5);
divisibleBy4(4);
