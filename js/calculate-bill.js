//get a reference to the calculate button

var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotal = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function calculateBtnClicked() {
  //   console.log(data)
  var data = billStringElement.value;
  var list = data.split(',');
  var call = 0;
  var sms = 0;

  for (var i = 0; i < list.length; i++) {
    var lists = list[i].trim();
    if (lists === 'call') {
      call++;
    }
    else if (lists === 'sms') {
      sms++;
    }
  }

  var totalBill = (call * 2.75) + (sms * 0.75);

  if (totalBill >= 30) {
    // adding the danger class will make the text red
    billTotal.classList.add("danger");
    billTotal.classList.remove("warning");

  }  else if (totalBill >= 20) {
    billTotal.classList.add("warning");
    billTotal.classList.remove("danger");
  }
  else{
    billTotal.classList.remove("danger");
    billTotal.classList.remove("warning");
  }

  billTotal.innerHTML = totalBill.toFixed(2);
}




calculateBtn.addEventListener('click', calculateBtnClicked);
//link the function to a click event on the calculate button
