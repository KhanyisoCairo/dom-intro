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
var callsTotal4 = 0;
var smsTotal4 = 0;
var callCost1 = 0;
var smsCost1 = 0;
var warningLevel = 0;
var criticalLevel = 0;


function update() {
    warningLevel = Number(warningSetting.value);
    criticalLevel = Number(criticalSetting.value);
    smsCost1 = Number(smsCostSetting.value);
    callCost1 = Number(callCostSetting.value);

    levelTest();

}

function addSettingBtn() {
    let grandTotal = callsTotal4 + smsTotal4;
    if (grandTotal < criticalLevel) {
        var settingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        // ... other code here
        if (settingsBtn) {
            var billItemType = settingsBtn.value;
            // billItemType will be 'call' or 'sms'
            // update the correct total
            if (billItemType === "call") {
                callsTotal4 += callCost1;
            }
            else if (billItemType === "sms") {
                smsTotal4 += smsCost1;
            }

            //update the totals that is displayed on the screen.
            callTotalSettings.innerHTML = callsTotal4.toFixed(2);
            smsTotalSettings.innerHTML = smsTotal4.toFixed(2);
            var totalCost3 = (callsTotal4 + smsTotal4).toFixed(2);
            totalSettings.innerHTML = totalCost3;


            //color the total based on the criteria
            levelTest();
        }

    }
}

function levelTest() {
    let grandTotal = callsTotal4 + smsTotal4;

    if (grandTotal >= criticalLevel) {
        totalSettings.classList.remove("warning");
        totalSettings.classList.add("danger");
    } else if (grandTotal >= warningLevel) {
        totalSettings.classList.remove("danger");
        totalSettings.classList.add("warning");
    } else {
        totalSettings.classList.remove("danger");
        totalSettings.classList.remove("warning");
    }
}
updateSettingsBtn.addEventListener("click", update)
addBtn.addEventListener('click', addSettingBtn)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
