function getEmailContent() {
    var fName = document.getElementById("inputTextMobileFName");
    var lName = document.getElementById("inputTextMobileLName");
    var email = document.getElementById("inputTextMobileEmail");
    var subject = document.getElementById("inputTextMobileSubject");
    var website = document.getElementById("inputTextMobileWebsite");
    var message = document.getElementById("inputTextMobileMessage");
    var phoneNumNums = new Array (document.getElementById("inputTitlePhoneNum1"),
                                    document.getElementById("inputTitlePhoneNum2"),
                                    document.getElementById("inputTitlePhoneNum3"),
                                    document.getElementById("inputTitlePhoneNum4"));
    var goodCharacters = true;
    if (fName.value.length <= 0){
        //Missing firstname value
        alert("Please enter a value for Firstname.");
        clearFields();
    } else if(lName.value.length <= 0){
        //Missing second name value
        alert("Please enter a value for Lastname.");
        clearFields();
    } else if (email.value.length <= 0){
        //Missing email field
        alert("Pleaes enter a value for email");
        clearFields();
    } else if (subject.value.length <= 0){
        //Missing email field
        alert("Pleaes enter a value for subject");
        clearFields();
    } else if (message.value.length <= 0){
        //Missing Message
        alert("I want to hear from you! Please shoot me a message!");
        clearFields();
    } else if (phoneNumNums[0].value.length <= 0){
        //Missing Country code
        alert("Please enter country code for phone number.");
        clearFields();
    } else if (phoneNumNums[1].value.length < 3){
        //Missing area code
        alert("Please enter area code for phone number.");
        clearFields();
    } else if (phoneNumNums[2].value.length < 3){
        //Missing phone num 1
        alert("Please enter first part for phone number.");
        clearFields();
    } else if (phoneNumNums[3].value.length < 4) {
        //Missing phone num 2
        alert("Please enter last part for phone number.");
        clearFields();
    } else {
        console.log("We did it! Now onto data check!");
        //Bad Character Check
        var i = 0;
        //Country check
        for (i = 0; i < 1; i++){
            var charString = String(phoneNumNums[0].value);
            var charInput = charString.charCodeAt(i);
            if ((charInput < 48) || (charInput > 57)){
                goodCharacters = false;
                console.log("Invalid Country Code.")
                alert("Please enter a country code.");
                clearFields();
                break;
            } else {
                console.log(charInput);
            }
        }
        //AreaCode Check
        for (i = 0; i < 3; i++){
            var charString = String(phoneNumNums[1].value);
            var charInput = charString.charCodeAt(i);
            if ((charInput < 48) || (charInput > 57)){
                goodCharacters = false;
                console.log("Invalid Area Code.")
                alert("Please enter a valid area code.");
                clearFields();
                break;
            } else {
                console.log(charInput);
            }
        }
        //Phone Num pt 1
        for (i = 0; i < 3; i++){
            var charString = String(phoneNumNums[2].value);
            var charInput = charString.charCodeAt(i);
            if ((charInput < 48) || (charInput > 57)){
                goodCharacters = false;
                console.log("Invalid Phone Number.")
                alert("Please enter a valid phone number.");
                clearFields();
                break;
            } else {
                console.log(charInput);
            }
        }
        //Phone Num pt 2
        for (i = 0; i < 4; i++){
            var charString = String(phoneNumNums[3].value);
            var charInput = charString.charCodeAt(i);
            if ((charInput < 48) || (charInput > 57)){
                goodCharacters = false;
                console.log("Invalid Phone Number.")
                alert("Please enter a valid phone number.");
                clearFields();
                break;
            } else {
                console.log(charInput);
            }
        }
    }

    /* Construct Email if Email is good to go */
    if (goodCharacters == true){
        sendEmail();
    } else {
        console.log("Email build failed.");
    }
    function sendEmail () {
        
    }
    
    /* This clears the input fields after a failed attempt to submit */
    function clearFields(){
        fName.value = '';
        lName.value = '';
        email.value = '';
        subject.value = '';
        website.value = '';
        message.value = '';

        console.log("We cleared everything.")
        
        for (i = 0; i < (phoneNumNums.length); i++){
            phoneNumNums[i].value = '';
        }
        
    }
    
}

