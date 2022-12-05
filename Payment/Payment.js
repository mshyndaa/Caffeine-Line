
var userChoose=1

function payCheck(){
  let Visa = document.getElementById("Visa");
  let borderPayPal = document.getElementById("PayPal")
  let cardNum = document.getElementById("cardNum")
  let cvvNum = document.getElementById("cvvNum")
  let intDate = document.getElementById("intDate")
  let VisaReq = document.getElementById("VisaReq");
  if(Visa.checked === true){
    userChoose = 2;
    VisaReq.style.display = "block"
    cardNum.setAttribute("required", ""); 
    cvvNum.setAttribute("required", "");
    intDate.setAttribute("required", "");
  }
  else{
    userChoose = 1;
    cardNum.removeAttribute("required" ,false);
    cvvNum.removeAttribute("required" ,false);
    intDate.removeAttribute("required" ,false);
    VisaReq.style.display = "none"
  }
}

// Set minimum date
let today = new Date();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
if(mm<10){
  mm='0'+mm
}
today = yyyy+'-'+mm;
document.getElementById("intDate").setAttribute("min", today);


// USERNAME CHECK
function isValidUserName(){
  let name = document.getElementById("textName").value;
  if(name.length =='' || name.length == null){
    alert("Username must be filled")
    return false;
  }
  else if(name.length >= 8){
    return true;
  }
}

// EMAIL CHECK
function isValidEmail(){
  let email = document.getElementById("textEmail").value;
  if(email.includes(".") && email.includes("@")){
    return true
  }
  else if(email.includes(".") && email.includes("@") == false){
    alert("Email must have @ character")
    return false
  }
  else if(email.includes(".") == false && email.includes("@")){
    alert("Email must have . character")
    return false
  }
  else if(email.includes(".") == false && email.includes("@") == false){
    alert("Not an email")
    return false
  }
  return true;
}

function isValidCity(){
  let city = document.getElementById("textCity").value
  let n = city.length
  if(n>5){
    return true;
  }
  else{
    alert("City must be more than 5 characters")
    return false;
  }
}

function isValidAddress(){
  let address = document.getElementById("textAddress").value
  let n = address.length
  if(n>10){
    return true;
  }
  else{
    alert("Address must be more than 10 characters")
    return false;
  }
}

function isValidCardNum(){
  let cardNum = document.getElementById("cardNum").value
  let n = cardNum.length
  if(n==0){
    alert("Card number must be filled!")
    return false
  }
  else if(n == 16)
    return true;
  else{
    alert("Input a valid card number! ( 16 numbers long )")
    return false
  }
}

// CVV CHECK
function isValidCVV(){
  let cvv = document.getElementById("cvvNum").value
  let n = cvv.length
  if(n==0){
    alert("CVV must be filled!")
    return false
  }
  else if(n==3){
    return true;
  }
  else{
    alert("Input a valid cvv! ( 3 number long )")
    return false;
  }
}

function isDateInputted(){
  let date = document.getElementById("intDate").value
  if(date.length == 0){
    alert("You must choose the card valid date")
    return false
  }
  return true
}

function validation() {
  let name_input = isValidUserName();
  if(name_input == false){
    return false
  }

  let email_input = isValidEmail();
  if(email_input == false){
  return false
}

  let city_input = isValidCity();
  if(city_input == false){
  return false
}

  let address_input = isValidAddress();
  if(address_input == false){
  return false
}

let Visa = document.getElementById("Visa").checked
let PayPal = document.getElementById("PayPal").checked

if(Visa == false && PayPal == false){
  alert("You must choose the payment method!")
  return false
}

  if(userChoose === 2){
    let card_input = isValidCardNum();
    if(card_input == false){
      return false
  }

    let cvv_input = isValidCVV();
    if(cvv_input == false){
    return false
  }
    let date_input = isDateInputted();
    if(date_input == false){
    return false
    }
  }
  let isAgree = document.getElementById("agree").checked
  if(isAgree == false){
    alert("You must agree to the terms and conditions")
    return false;
  }
  alert("Payment Success")
  location.href = "../Home/Home.html"
  return true;

}