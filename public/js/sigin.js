const validation = () => {
    let isValid = true; 
  
    
    // picking input`
    let email = document.getElementById("email");
    let passwordInput = document.getElementById('password');

    // picking input error
    let emailErr = document.getElementById("emailErr");
    let passwordError = document.getElementById('passwordErr');

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

        //password validation 
        if (isValid) {
            const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if (passwordInput.value == "") {
                passwordInput.style.border = "1px solid red";
                passwordError.textContent = "Password is required";
                passwordError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
                isValid = false;
            } else if (!passwordInput.value.match(passwordregex)) {
                passwordInput.style.border = "1px solid red";
                passwordError.textContent = "Password should be minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
                passwordError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
                isValid = false;
            } else {
                passwordInput.style.border = "none";
                passwordError.textContent = "";
            }
          }

          return isValid;
    
} 