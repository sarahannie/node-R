const validation = () => {
    let isValid = true;

    let image = document.getElementById("item-image");
    let price = document.getElementById("item-price");
    let quantity = document.getElementById("item-quantity");
    let delivery = document.getElementById("delivery");
    let delivery1 = document.getElementById("delivery1");
    let org2 = document.getElementById("org2");
    let phone = document.getElementById("phone");
    let description = document.getElementById("item-description");
    let org1 = document.getElementById("org1");
    let pay = document.getElementById("pay");
    let pay1 = document.getElementById("pay1");
    let address = document.getElementById("address");
    let dor = document.getElementById("dor");
    let organic = document.getElementById("organic");
    let org = document.getElementById("org");
    let inorganic = document.getElementById("inorganic");
    let ward = document.getElementById("ward");
    let name = document.getElementById("item-name");

    if(isValid){
        if (name.value == "") {
            name.style.border = "2px red solid";
            name.setAttribute("placeholder", " Product Name Cant Be Empty");
            isValid = false;
          }
          else{
              name.style.border ="2px green solid"
          }
    }
    if(isValid){
        if (ward.value == "") {
            ward.style.border = "2px red solid";
            ward.setAttribute("placeholder", " ward Cant Be Empty");
            isValid = false;
          }
          else{
              ward.style.border ="2px green solid"
          }
    }

    if(isValid){
        if (!organic.checked && !inorganic.checked) {
            organic.style.border = "2px red solid";
            org.textContent="Please select one";
            org.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
            isValid = false;
          }
          else{
              organic.style.border ="2px green solid"
              org.textContent="";
          }
    }

    if(isValid){
        if (dor.value == "") {
            dor.style.border = "2px red solid";
            dor.setAttribute("placeholder", "");
            isValid = false;
          }
          else{
              dor.style.border ="2px green solid"
          }
    }
    if(isValid){
        if (address.value == "") {
            address.style.border = "2px red solid";
            address.setAttribute("placeholder", "Address cant be empty");
            isValid = false;
          }
          else{
            address.style.border ="2px green solid"
          }
    }

    if(isValid){
        if (!pay.checked && !pay1.checked) {
            pay.style.border = "2px red solid";
            org1.textContent="Please select one";
            org1.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
            isValid = false;
          }
          else{
              pay.style.border ="2px green solid"
              org1.textContent="";
          }
    }

    if(isValid){
        if (description.value == "") {
            description.style.border = "2px red solid";
            description.setAttribute("placeholder", "Description cant be empty");
            isValid = false;
          }
          else{
            description.style.border ="2px green solid"
          }
    }
    if(isValid){
        if (phone.value == "") {
            phone.style.border = "2px red solid";
            phone.setAttribute("placeholder", "Phone Number cant be empty");
            isValid = false;
          }
          else{
            phone.style.border ="2px green solid"
          }
    }

    if(isValid){
        if (!delivery.checked && !delivery1.checked) {
            delivery.style.border = "2px red solid";
            org2.textContent="Please select one";
            org2.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
            isValid = false;
          }
          else{
            delivery.style.border ="2px green solid"
              org2.textContent="";
          }
    }

    if(isValid){
        if (quantity.value == "") {
            quantity.style.border = "2px red solid";
            quantity.setAttribute("placeholder", "Quantity cant be empty");
            isValid = false;
          }
          else{
            quantity.style.border ="2px green solid"
          }
    }
    if(isValid){
        if (price.value == "") {
            price.style.border = "2px red solid";
            price.setAttribute("placeholder", "Price cant be empty");
            isValid = false;
          }
          else{
            price.style.border ="2px green solid"
          }
    }
   

    return isValid;


    
}