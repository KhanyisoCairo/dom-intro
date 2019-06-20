
function calculateBtnClicked(billStringElement) {
  //   console.log(data)
  var data = billStringElement;
  var list = data.split(',');
  var call = 0;
  var sms = 0;

  for (var i = 0; i < list.length; i++) {
    var lists = list[i].trim();
    if (lists === 'call') {
      call += 2.75;
    }
    else if (lists === 'sms') {
      sms +=0.65;
    }
    
  }
  return (call + sms).toFixed(2);
}


//link the function to a click event on the calculate button
