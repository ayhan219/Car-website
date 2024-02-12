const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const submitBtn = document.querySelector("#sign-up");
const checkbox = document.querySelector("#checkbox");
const loginLink = document.querySelector("#loginLink");
const signupform2 = document.querySelector(".signup-form2");
const signupform = document.querySelector(".signup-form");
const signupLink = document.querySelector("#signupLink");

runEvents();

function runEvents() {
  username.addEventListener("keyup", usernameControl);
  password.addEventListener("keyup", passwordControl);
  password2.addEventListener("keyup", password2Control);
  email.addEventListener("keyup", emailControl);
  submitBtn.addEventListener("click", submit);
  checkbox.addEventListener("click", controlCheckbox);
  signupLink.addEventListener("click", goSignup);
  loginLink.addEventListener("click",goLogin)
}

function usernameControl() {
  const usernameValue = username.value;
  if (usernameValue == "") {
    username.style.borderColor = "red";
    return false;
  }
  if (!usernameValue.match(/[A-Z]/)) {
    username.style.borderColor = "red";
    return false;
  }
  username.style.borderColor = "green";
  return true;
}

function passwordControl() {
  const passwordValue = password.value;

  if (passwordValue == "") {
    password.style.borderColor = "red";
    return false;
  }
  if (!passwordValue.match(/[A-Z]/)) {
    password.style.borderColor = "red";
    return false;
  }
  password.style.borderColor = "green";
  return true;

  password2Control();
}

function password2Control() {
  const passwordValue = password.value;
  const password2Value = password2.value;

  if (password2Value !== passwordValue) {
    password2.style.borderColor = "red"; // password2 alanını da kırmızıya döndür
    return false;
  } else {
    password2.style.borderColor = "green"; // Eğer aynı ise password2 alanını yeşil yap
    return true;
  }
}

function emailControl() {
  const emailValue = email.value;
  if (emailValue == "") {
    email.style.borderColor = "red";
    return false;
  }
  if (!emailValue.match(/[@]/)) {
    email.style.borderColor = "red";
    return false;
  }
  email.style.borderColor = "green";
  return true;
}
function controlCheckbox() {
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  console.log("basildi");
  if (
    !usernameControl() ||
    !passwordControl() ||
    !password2Control() ||
    !emailControl() ||
    !controlCheckbox()
  ) {
    alert("Please try again!");
  } else {
    alert("Succesfuly Signup! Welcome");
  }
}

function goSignup(){
    signupform.style.zIndex ="10";
    signupform2.style.zIndex ="1";
    
}
function goLogin(){
    
    signupform2.style.zIndex ="10";
    signupform.style.zIndex ="1";
}



