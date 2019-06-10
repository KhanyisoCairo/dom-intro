// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");
//add an event listener for when the add button is pressed
var addToBillBtn = document.querySelector(".addToBillBtn");
var callsTotal1 = 0;
var smsTotal1 = 0;


function textBillTotal(){

    // ... other code here
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal1 += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal1 += 0.75;
    }
    //update the totals that is displayed on the screen.
    callTotalOne.innerHTML = callsTotal1.toFixed(2);
    smsTotalOne.innerHTML = smsTotal1.toFixed(2); 
    var totalCost1 = (callsTotal1 + smsTotal1).toFixed(2);
    console.log(totalCost1);
     totalOne.innerHTML = totalCost1;
    
    
    //color the total based on the criteria
    if (totalCost1 >= 50){
        // adding the danger class will make the text red
        totalOne.classList.add("danger");
    }
    else if (totalCost1 >= 30){
        totalOne.classList.add("warning");
    }
}
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
addToBillBtn.addEventListener('click', textBillTotal);