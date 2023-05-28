/*
If the number is divisible by 3, print a "multiple of 3"
*/

function multipleOf3(num) {
  if (num % 3 === 0) {
    console.log("multiple of 3");
  }
  else {
      console.log("not a multiple of 3");
  }
}

multipleOf3(3);
multipleOf3(5);