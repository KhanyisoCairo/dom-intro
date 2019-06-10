// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
//get a reference to the add button
//get a reference to the 'Update settings' button
var addBtn = document.querySelector(".updateAdd");
var updateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
// create a variables that will keep track of all three totals.
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningSetting = document.querySelector(".warningLevelSetting");
var criticalSetting = document.querySelector(".criticalLevelSetting");
//add an event listener for when the 'Update settings' button is pressed
//updateSettingsBtn.addEventListener('click', RadioUpdateSetting );
//add an event listener for when the add button is pressed
var callsTotal1 = 0;
var smsTotal1 = 0;
var callCost1 = 0;
var smsCost1 = 0;
var warningLevel= 0;
var criticalLevel = 0;
var totalUpdate = callsTotal1+smsTotal1


function update(){
    warningLevel = Number(warningSetting.value);
     criticalLevel =Number(criticalSetting.value);
    smsCost1 =Number(smsCostSetting.value);
    callCost1 =Number(callCostSetting.value);

    
    console.log(smsTotal1)
    console.log(callsTotal1)
    if(totalUpdate>=criticalLevel){
        totalSettings.classList.add("danger");
        totalSettings.classList.remove("warning");
    }else if(totalUpdate>=warningLevel){
        totalSettings.classList.remove("danger");
        totalSettings.classList.add("warning");
    } else {
        totalSettings.classList.remove("warning");
        totalSettings.classList.remove("danger");

    }
  
}
 updateSettingsBtn.addEventListener("click",update)




addBtn.addEventListener('click',function(){
    var settingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    // ... other code here
    if (settingsBtn) {
        var billItemType = settingsBtn.value;
        // billItemType will be 'call' or 'sms'
        // update the correct total
        if (billItemType === "call") {
            callsTotal1 += callCost1;
        }
        else if (billItemType === "sms") {
            smsTotal1 += smsCost1;
        }

        //update the totals that is displayed on the screen.
        callTotalSettings.innerHTML = callsTotal1.toFixed(2);
        smsTotalSettings.innerHTML = smsTotal1.toFixed(2);
        var totalCost3 = (callsTotal1 + smsTotal1).toFixed(2);
        totalSettings.innerHTML = totalCost3;


        //color the total based on the criteria
        if (totalCost3 >= criticalLevel) {
            // adding the danger class will make the text red
            totalSettings.classList.add("danger");
        }
        else if (totalCost3 >= warningLevel) {
            totalSettings.classList.add("warning");
        }   
    }
    if(totalCost3 >= criticalLevel){
        addBtn.disabled = true;
        console.log("HIII")
    }
})


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
