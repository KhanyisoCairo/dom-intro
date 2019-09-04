function FactoryTextBill() {

    var call = 0;
    var sms = 0;
    var total = 0;
    function getTextInput(getInput) {

       // var data = getInput;

        if (getInput === "call") {
            call += 2.75
        }
        else if (getInput === "sms") {
            sms += 0.75;
        }
        total = call + sms;
    }
    function getCallCost() {

        return call.toFixed(2);
    }
    function getSmsCost() {

        return sms.toFixed(2);
    }

    function getTotalCost() {
        return total.toFixed(2);

    }

    function color() {

        if (total >= 50) {
       
            return "danger";
        }
        else if (total >= 30) {
        return "warning";
        }
    }


    
    return {
        getTextInput,
        getCallCost,
        getSmsCost,
        getTotalCost,
        color

    }
}