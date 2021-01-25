var host = ""; //This is filled in by server

function setHosting(theHosting){
    var theForm = document.getElementById("my-form");
    host = "http://localhost:" + theHosting + "/contact";
    theForm.setAttribute("action", host);
    console.log("We set the host action to: " + host);
}

function isEmailValid() {
    
    //Get and define variables of the form
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
    var goodCharacters = 0;
    if (fName.value.length <= 0){
        //Missing firstname value
        alert("Please enter a value for Firstname.");
        goodCharacters = 1;
    } else if(lName.value.length <= 0){
        //Missing second name value
        alert("Please enter a value for Lastname.");
        goodCharacters = 2;
    } else if (email.value.length <= 0){
        //Missing email field
        alert("Please enter a value for email");
        goodCharacters = 3;
    } else if (subject.value.length <= 0){
        //Missing subject field
        alert("Please enter a value for subject");
        goodCharacters = 4;
    } else if (message.value.length <= 0){
        //Missing Message
        alert("I want to hear from you! Please shoot me a message!");
        goodCharacters = 5;
    } else if (phoneNumNums[0].value.length <= 0){
        //Missing Country code
        alert("Please enter country code for phone number.");
        goodCharacters = 6;
    } else if (phoneNumNums[1].value.length < 3){
        //Missing area code
        alert("Please enter area code for phone number.");
        goodCharacters = 7;
    } else if (phoneNumNums[2].value.length < 3){
        //Missing phone num 1
        alert("Please enter first part for phone number.");
        goodCharacters = 8;
    } else if (phoneNumNums[3].value.length < 4) {
        //Missing phone num 2
        alert("Please enter last part for phone number.");
        goodCharacters = 9;
    } else {
        //Bad Character Check
        var i = 0;
        //Country check
        for (i = 0; i < 1; i++){
            var charString = String(phoneNumNums[0].value);
            var charInput = charString.charCodeAt(i);
            if ((charInput < 48) || (charInput > 57)){
                alert("Please enter a country code.");
                goodCharacters = 10;
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
                goodCharacters = 11;
                console.log("Invalid Area Code.")
                alert("Please enter a valid area code.");
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
                goodCharacters = 12;
                console.log("Invalid Phone Number.")
                alert("Please enter a valid phone number.");
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
                goodCharacters = 13;
                console.log("Invalid Phone Number.")
                alert("Please enter a valid phone number.");
                break;
            } else {
                console.log(charInput);
            }
        }
    }

    /* return value for a good email */
    return goodCharacters;
    
}

function submitEmail(){
    //Get and define variables of the form
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
    var theForm = document.getElementById("my-form");
    var userEmail = {
        FName: fName.value,
        LName: lName.value,
        Email: email.value,
        Subject: subject.value,
        Message: message.value,
        Website: website.value,
        AreaCode: phoneNumNums[0].value,
        PhoneNum1: phoneNumNums[1].value,
        PhoneNum2: phoneNumNums[2].value,
        PhoneNum3: phoneNumNums[3].value
    };
    console.log("Ready to send our email:");
    console.log(userEmail);
    var jsonString = JSON.stringify(userEmail);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/emailSubmit', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            var item = xhr.responseText;
            var successMSG = JSON.parse(item);
            if (successMSG.SuccessNum == 0){
                console.log("DEBUG: Successful User submission, going to main page.");
                alert(successMSG.Message);
            } else {
                console.log("DEBUG: Unsuccessful User submission: " + successMSG.Message);
                alert(successMSG.Message);
            }
        }
    });
    xhr.send(jsonString);
}

function oof(){
    console.log("oof");
}