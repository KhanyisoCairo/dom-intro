function FactroryRadioBill() {
    var call = 0;
    var sms = 0;
    var total = 0;

    function setRadioBill(myRadio) {

        var getRadio = myRadio;

        if (getRadio === "call") {
            call += 2.75
        }
        else if (getRadio === "sms") {
            sms += 0.75;
        }
        total = call + sms;
    }
    function getCalls() {
        return call.toFixed(2);
    }
    function getSms() {
        return sms.toFixed(2);
    }
    function getTotal() {
        return total.toFixed(2);
    }
function colorChange(){
    if (total >= 50) {
       
        return "danger";
    }
    else if (total >= 30) {
    return "warning";
    }
}


    return {

        setRadioBill,
        getCalls,
        getSms,
        getTotal,
        colorChange
    }
}