const validation = (event) => {

    let isValid = true;
    let error = 0;

    // picking input
    let fullName = document.getElementById("fullName")
    let email = document.getElementById("email");
    let message = document.getElementById("emailmess")

     // picking input error

     let fnameErr = document.getElementById("fnameErr");
     let emailErr = document.getElementById("emailErr");
     let messageErr = document.getElementById("emailmess")

    
         // Validation of fullname
if (isValid) {
    if (fullName.value == "") {
      fullName.style.border = "1px solid red";
      fnameErr.textContent = "Please input your FullName";
      fnameErr.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(fullName.value)) {
      fullName.style.border = "1px solid red";
      fnameErr.textContent = "Please input vaild name ";
      fnameErr.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      isValid = false;
    } else if (fullName.value.length < 5) {
      fullName.style.border = "1px solid red";
      fnameErr.textContent = "Please the full name must be atleast 5 letters";
      fnameErr.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      isValid = false;
    } else if (fullName.value.length > 50) {
      fullName.style.border = "1px solid red";
      fnameErr.textContent = "Please the full name should not exceed 50 letters";
      fnameErr.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      isValid = false;
    } else {
      fullName.style.border = "1px solid green";
      fnameErr.textContent = "";
    }
}

   // validation of email
   if (isValid) {
    const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(email.value == ""){
        email.style.border = "1px solid red";
        emailErr.textContent="Email is required";
        emailErr.style="color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;"
        isValid = false;
    }
    else if(!email.value.match(emailregex)){
        email.style.border = "1px solid red";
        emailErr.textContent = "please input correct email";
        emailErr.style="color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;"
        isValid = false;
    }else{
        email.style.border = " 1px solid green" ;
        emailErr.textContent=""
    }
    }

    if(isValid){
        if(message.value == ""){
            message.style.border = "1px solid red";
            messageErr.textContent = "please input correct email";
            messageErr.style="color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;"
            isValid = false; 
        }else{
            message.style.border = " 1px solid green" ;
            messageErr.textContent=""
        }
    }

    return isValid;

}