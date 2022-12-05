function isValidName(){
	let name = document.getElementById("textUser").value
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
  let email = document.getElementById("textEmail").value
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

function isValidPassword(){
	let name = document.getElementById("textPass").value
  let n = name.length
  if(n>8){
    return true
  }
  else if(n==0){
    alert("Password must be filled!")
    return false
  }
  else{
    alert("Password must be more than 8 characters")
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
  let isPass = isValidPassword();
  if(isPass == false){
  return false
}
let isAgree = document.getElementById("agree").checked
if(isAgree == false){
  alert("You must agree to the terms and conditions")
  return false;
}
alert("Sign Up Success")
location.href = "../Home/Home.html"
  return true
}