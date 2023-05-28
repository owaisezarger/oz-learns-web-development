// Given 2 numbers a and b print which is greater or "both equal".

function greaterOrEqual(a, b) {
    if (a > b) {
        console.log(a);
    } else if(a === b){
        console.log("both equal");
    } else{
        console.log(b);
    }
}

greaterOrEqual(10,12);
greaterOrEqual(10,10);
greaterOrEqual(14,10);
