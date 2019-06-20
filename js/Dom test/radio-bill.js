// get a reference to the sms or call radio buttons
var billItemTypeRadio =document.querySelector(".billItemTypeRadio");

//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalTwo = document.querySelector(".totalTwo");
//add an event listener for when the add button is pressed


var callsTotal2 = 0;
var smsTotal2 = 0;

function radiobillTotal(){

 var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    // ... other code here
    if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
    // update the correct total
    if (billItemType === "call"){
        callsTotal2 += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal2 += 0.75;
    }
    console.log(callsTotal2)
    console.log(smsTotal2)

    //update the totals that is displayed on the screen.
    callTotalTwo.innerHTML = callsTotal2.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal2.toFixed(2); 
    var totalCost2 = (callsTotal2 + smsTotal2).toFixed(2);
     totalTwo.innerHTML = totalCost2;
    
    
    //color the total based on the criteria
    if (totalCost2 >= 50){
        // adding the danger class will make the text red
        totalTwo.classList.add("danger");
    }
    else if (totalCost2 >= 30){
        totalTwo.classList.add("warning");
    }

   

}
}
radioBillAddBtn.addEventListener('click',radiobillTotal );

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
