
var billTypeText = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");


var templateSource = document.querySelector(".userTemplate").innerHTML;

var userTemplate = Handlebars.compile(templateSource);

var userDataElement = document.querySelector(".text-bill");
var FactoryIntance = FactoryTextBill();

var callsTotal1 = 0;
var smsTotal1 = 0;

function textBillTotal() {

//    var color  = factoryInstance.color();
    var billTypeEntered = billTypeText.value;

    FactoryIntance.getTextInput(billTypeEntered);

    

    

   
    var userDataElem = userTemplate({
        smsTotal : FactoryIntance.getSmsCost(),
        callTotal : FactoryIntance.getCallCost(),
        total : FactoryIntance.getTotalCost(),
        //color
        
      
    });
    //let newTemp = userTemplate(userDataElement)
    userDataElement.innerHTML = userDataElem;
    
}

addToBillBtn.addEventListener('click', textBillTotal);