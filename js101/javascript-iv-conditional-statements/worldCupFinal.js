/*
You are given three values, stored in variable with the following names
NzScore, NzSuperover, NFours
On the next line, you are given three more values stored in the variable with the following names
EngScore, EngSuperover, EngFours
If the value of NzScore > EngScore, print "New Zealand"
Else if the value of NScore < EngScore, print "England"
Else If the value of NzSuperOver > EngSuperover, print "New Zealand"
Else if the value of NzSuperover < EngSuperover, print "England'
Else if the value of NFours > EngFours, print "New Zealand"
Else if the value of Nfours < EngFours, print "England"
*/

function worldCupFinal(NzScore, NzSuperOver, NFours, EngScore, EngSuperover, EngFours){
    if(NzScore > EngScore){
        console.log("New Zealand");
    }
    else if(NzScore < EngScore){
        console.log("England");
    }
    else if(NzSuperOver > EngSuperover){
        console.log("New Zealand");
    }
    else if(NzSuperOver < EngSuperover){
        console.log("England");
    }
    else if(NFours > EngFours){
        console.log("New Zealand");
    }
    else if(NFours < EngFours){
        console.log("England");
    }
}
worldCupFinal(241, 15, 21, 241, 15, 26);