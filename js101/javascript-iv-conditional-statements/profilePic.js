/*
You are given two integers, stored in the variable with the following names
L, W
Also, you are given another two integers, stored in the variable with the following names
length & width
If the value stored in length is greater than the value stored in L and the value stored in width, is greater than the value stored in W, print Up load
Else If the value stored in length is less than the value stored in L, print Increase Length
Else if the value stored in width, is less than the value stored in W, print Increase Width
*/

function profilePic(L, W, length, width) {
   if (length > L && width > W) {
    console.log("load");
   }
   else if (length < L) {
    console.log("Increase length");
   }
   else if (width < W) {
    console.log("Increase width");
   }
}

profilePic(12, 14, 8, 19);
profilePic(5, 6, 15, 13);
profilePic(12, 6, 16, 4);