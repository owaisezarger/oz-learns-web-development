/*
- Ajay went for shopping one day and decided to visit a showroom of Nike. 
While entering the store, he saw an offer on the door, 
The offer was a customer would get a discount of 10% when his/her bill total is 5000 or above. 
Consider Ajay purchases products worth of 6000, will he get the discount or not?
- Declare the appropriate variable and get the result.
*/

function shoppingAndDiscount(number){
    if(number>=5000){
        console.log("You are eligible for a discount");
    }else{
       console.log("You are not eligible for a discount");
    }
}

shoppingAndDiscount(6000);