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
  let isPass = isValidPassword();
  if(isPass == false){
    return false
  }
  let isAgree = document.getElementById("agree").checked
  if(isAgree == false){
    alert("You must agree to the terms and conditions")
    return false;
  }
  alert("Login Success")
  location.href = "../Home/Home.html"
  return true;
}