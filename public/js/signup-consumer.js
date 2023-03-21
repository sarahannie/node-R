const validation = () => {
    let isValid = true; 
    let error = 0;
    
     // picking input
     let fullName = document.getElementById("fullName")
     let email = document.getElementById("email");
     let gmale = document.getElementById("gmale");
     let gfemale = document.getElementById("gfemale");
     let passwordInput = document.getElementById('password');
     let repasswordInput = document.getElementById('repassword');

     // picking input error
    
     let fnameErr = document.getElementById("fnameErr");
     let emailErr = document.getElementById("emailErr"); 
     let gfemaleErr = document.getElementById("gfemaleErr");   
    let passwordError = document.getElementById('passwordErr');
    let repasswordError = document.getElementById('repasswordErr');


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


    
    // validation of gender start
    if (isValid) {
        if (!gmale.checked && !gfemale.checked) {
            gmale.style.border = "1px solid red";
            gfemale.style.border = "1px solid red";
            gfemaleErr.textContent = "Please select your gender";
            gfemaleErr.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
            isValid = false;
        } else {
            gmale.style.border = "none";
            gfemale.style.border = "none";
            gfemaleErr.textContent = "";
        }
    }

      // validation for phone number
      if (isValid) {
        // Get the phone number input element
        const phoneNumberInput = document.getElementById('phoneInput');
      
        // Get the selected country code from the dropdown
        const countryCodeDropdown = document.getElementById('country-code');
        const selectedCountryCode = countryCodeDropdown.options[countryCodeDropdown.selectedIndex].text;
      
        // Define a regular expression pattern for the selected country code
        let phonePattern;
        switch (selectedCountryCode) {
          case '+256':
            phonePattern = /^07\d{8}$/; // Uganda phone number format: 07XXXXXXXX
            break;
          case '+254':
            phonePattern = /^07\d{8}$/; // Kenya phone number format: 07XXXXXXXX
            break;
          case '+255':
            phonePattern = /^07\d{8}$/; // Tanzania phone number format: 07XXXXXXXX
            break;
          case '+234':
            phonePattern = /^0\d{10}$/; // Nigeria phone number format: 0XXXXXXXXXX
            break;
          default:
            phonePattern = /^\d+$/; // Default pattern for other country codes
            break;
        }
      
        // Get the error message element
        const phonenoErr = document.getElementById('phonenumErr');
      
        // Add an event listener to the phone number input to validate its value
        phoneNumberInput.addEventListener('blur', function() {
          const phoneValue = this.value;
          if (!phoneValue.match(phonePattern)) {
            phoneNumberInput.style.border = "1px solid red";
            phonenoErr.textContent = "Please enter a valid phone number";
            phonenoErr.style.color = "red";
            isValid = false;
          } else if (phoneValue === "") {
            phoneNumberInput.style.border = "1px solid red";
            phonenoErr.textContent = "Please enter a phone number";
            phonenoErr.style.color = "red";
            isValid = false;
          } else {
            phoneNumberInput.style.border = "1px solid green";
            phonenoErr.textContent = "";
            
          }
        });
      }

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
      
      // validation for re-entered password
      if (isValid) {
        if (repasswordInput.value == "") {
            repasswordInput.style.border = "1px solid red";
            repasswordError.textContent = "Please re-enter your password";
            repasswordError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
            isValid = false;
        } else if (repasswordInput.value !== passwordInput.value) {
            repasswordInput.style.border = "1px solid red";
            repasswordError.textContent = "Passwords do not match";
            repasswordError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
            isValid = false;
        } else {
            repasswordInput.style.border = "none";
            repasswordError.textContent = "";
        }
      }
      
      return isValid;

}