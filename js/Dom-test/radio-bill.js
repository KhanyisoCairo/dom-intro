
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalTwo = document.querySelector(".totalTwo");

var templateSource = document.querySelector(".userTemplate").innerHTML;

var userTemplate = Handlebars.compile(templateSource);
var userDataElem = document.querySelector(".userData");



var factoryInstance = FactroryRadioBill();

function radiobillTotal() {

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        factoryInstance.setRadioBill(billItemType);
      var getColor =  factoryInstance.colorChange();
        //update the totals that is displayed on the screen.
        // factoryInstance.getCalls();
        // smsTotalTwo.innerHTML = factoryInstance.getSms();
        //  totalTwo.innerHTML = factoryInstance.getTotal()
        display();

    }function display(){


 var data = userTemplate({
            callTotal: "R" + factoryInstance.getCalls(),
            smsTotal: "R" + factoryInstance.getSms(),
            total: "R" + factoryInstance.getTotal(),
            getColor 
        });
       
        userDataElem.innerHTML = data
    }
 

    
}
radioBillAddBtn.addEventListener('click', radiobillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
