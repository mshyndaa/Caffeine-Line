function isValidName(){
	let name = document.getElementById("fullname").value
  let n = name.length
  if(n>0){
    return true
  }
  else{
    alert("Name must be filled")
    return false
  }
}

function isValidEmail(){
  let email = document.getElementById("email").value
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

function isValidMessage(){
  let message = document.getElementById("message").value
  let n=message.length
  if(n>0){
    return true
  }
  else{
    alert("Message must be filled!")
    return false
  }
}

function validation(){
  let isName = isValidName();
  if(isName == false){
  return false
}
  let isEmail = isValidEmail();
  if(isEmail == false){
  return false
}
  let isMessage = isValidMessage();
  if(isMessage == false){
  return false
}
  alert("From submitted!")
  location.href = "../Home/Home.html"
  return true;
}