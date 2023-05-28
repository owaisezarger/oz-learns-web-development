// If a person is allowed to drive in India print "Apply for a license" or "NA"

function eligibleToDrive(age){
    if(age > 18){
        console.log("Apply for a license")
    }else{
        console.log("NA")
    }
}

eligibleToDrive(20);
eligibleToDrive(17);
