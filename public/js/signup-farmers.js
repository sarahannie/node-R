let dor = document.getElementById("dor");
 // validation date of registration;

 let today = new Date();
 let dd = String(today.getDate()).padStart(2, "0");
 let mm = String(today.getMonth()+1).padStart(2,"0");
 let yyyy = today.getFullYear();
 let defaultDate = yyyy + '-' + mm + '-' + dd;

 console.log(`Default Date: ${defaultDate}`);
 dor.defaultValue = defaultDate;



 





const validation = (event) => {
    let isValid = true;
    let error = 0;
    // picking input
    let fullName = document.getElementById("fullName")
    let email = document.getElementById("email");
    
    let dob = document.getElementById("dob");
    let nin = document.getElementById("nin");
    let unique = document.getElementById('unique');
    let gmale = document.getElementById("gmale");
    let gfemale = document.getElementById("gfemale");
    let passwordInput = document.getElementById('password');
    let repasswordInput = document.getElementById('repassword');

    // picking input error

    let fnameErr = document.getElementById("fnameErr");
    let emailErr = document.getElementById("emailErr");
   
    let dobErr = document.getElementById("dobErr");
    let ninErr = document.getElementById("ninErr");
    let uniqueErr = document.getElementById('uniqueErr');
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



    //validation of date of birth
    if (isValid) {  
      let dobValue = dob.value;
      let dobDate = new Date(dobValue);
  
      //calculating user age
      let ageDiff = Date.now() - dobDate.getTime();
      let ageDate = new Date(ageDiff);
      let age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
      if (age < 10) {
          event.preventDefault();
          dob.style.border = "1px solid red";
          dobErr.textContent = "User must be at least 10 years old.";
          dobErr.style.color = "red";
          dobErr.style.fontSize = "11px";
          dobErr.style.fontFamily = "Arial, Helvetica, sans-serif";
          isValid = false;
      } else if (dobValue == ""){
        event.preventDefault();
          dob.style.border = "1px solid red";
          dobErr.textContent = "User must  add date of birth.";
          dobErr.style.color = "red";
          dobErr.style.fontSize = "11px";
          dobErr.style.fontFamily = "Arial, Helvetica, sans-serif";
          isValid = false;
      }
      else {
          dob.style.border = "1px solid green";
          dobErr.textContent = ""; 
      }
  }
   
    
    //validation of nin
    if (isValid) {
    const ninreg = /^([0-9]{13}).*$/
    if(nin.value == "" ){
        nin.style.border = "1px solid red";
        ninErr.textContent="nin number can not be empty ";
        ninErr.style="color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;"
        isValid = false;
    }
   else if(! nin.value.match(ninreg) ){
        nin.style.border = "1px solid red";
        ninErr.textContent="Please input the correct nin number";
        ninErr.style="color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;"
        isValid = false;
    }
    else{
        nin.style.border = " 1px solid green" ;
        ninErr.textContent=""
    }
  }
    //validation for unique
    if (isValid) {
    const foregex = /^FO-([0-9]{3})+$/
    if (unique.value == "") {
      unique.style.border = "1px solid red"
      uniqueErr.textContent = "Unique number is required";
      uniqueErr.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      isValid = false;
    }else if(!unique.value.match(foregex)){
        unique.style.border = "1px solid red"
        uniqueErr.textContent = "Unique number must follow this formart AO-000";
        uniqueErr.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        isValid = false;
      }else {
        unique.style.border = "1px solid green"
        uniqueErr.textContent = "";
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

// Activities validation
let activities = document.getElementById("activities");
let activitiesErr = document.getElementById("activitiesErr");


if (activities.value == "Activites Undertaken") {
    activities.style.border = "1px solid red";
    activitiesErr.textContent = "Please select an activity";
    activitiesErr.style="color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;"
    isValid = false;
} else {
    activities.style.border = "1px solid green";
    activitiesErr.textContent = " "; 
}
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



    // if all validation passed, submit the form
    // if (!isValid) {
    //     event.preventDefault();
        
    //     }

    //    if (isValid) {
        
    //       form.submit();
    //       }

    return isValid;
     }
   

