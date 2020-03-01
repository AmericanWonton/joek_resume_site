function getEmailContent() {
    
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
        //Get and Define Scripts
        var js1 = document.createElement("script");
        js1.type = "text/javascript";
        js1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
        document.body.appendChild(js1);
        var js2 = document.createElement("script");
        js2.type = "text/javascript";
        js2.src = "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js";
        document.body.appendChild(js2);
        //Create virtual form
        var fakeForm = document.createElement("fakeForm");
        fakeForm.setAttribute("id", "fakeForm");
        document.body.appendChild(fakeForm);
        //Add Firstname
        var fakeFName = document.createElement("INPUT");
        fakeFName.setAttribute("name", "firstname");
        fakeFName.setAttribute("type", "text");
        fakeFName.setAttribute("id", "fNameID");
        fakeFName.setAttribute("value", fName.value);
        document.getElementById("fakeForm").appendChild(fakeFName);
        //Add Lastname
        var fakeFName = document.createElement("INPUT");
        fakeLName.setAttribute("name", "lastname");
        fakeLName.setAttribute("type", "text");
        fakeLName.setAttribute("id", "lNameID");
        fakeLName.setAttribute("value", lName.value);
        document.getElementById("fakeForm").appendChild(fakeLName); 
        //Email
        var fakeEmail = document.createElement("INPUT");
        fakeEmail.setAttribute("name", "email");
        fakeLName.setAttribute("type", "email");
        fakeEmail.setAttribute("id", "emailID");
        fakeEmail.setAttribute("value", email.value);
        document.getElementById("fakeForm").appendChild(fakeEmail);
        //Subject
        var fakeSubject = document.createElement("INPUT");
        fakeSubject.setAttribute("name", "subject");
        fakeSubject.setAttribute("type", "text");
        fakeSubject.setAttribute("id", "subjectID");
        fakeSubject.setAttribute("value", subject.value);
        document.getElementById("fakeForm").appendChild(fakeSubject);
        //Message
        var fakeMessage = document.createElement("TEXTAREA");
        fakeMessage.setAttribute("name", "message");
        fakeMessage.setAttribute("id", "messageID");
        fakeMessage.setAttribute("form", "fakeForm");
        fakeMessage.setAttribute("value", message.value);
        document.getElementById("fakeForm").appendChild(fakeMessage);
        //Website
        var fakeWebsite = document.createElement("INPUT");
        fakeWebsite.setAttribute("name", "website");
        fakeWebsite.setAttribute("type", "text");
        fakeWebsite.setAttribute("id", "websiteID");
        fakeWebsite.setAttribute("value", website.value);
        document.getElementById("fakeForm").appendChild(fakeWebsite);
        //Country Code
        var fakeCountryCode = document.createElement("INPUT");
        fakeCountryCode.setAttribute("name", "country_code");
        fakeCountryCode.setAttribute("type", "text");
        fakeCountryCode.setAttribute("id", "country_code_ID");
        fakeCountryCode.setAttribute("value", phoneNumNums[0].value);
        document.getElementById("fakeForm").appendChild(fakeCountryCode);
        //Area Code
        var fakeAreaCode = document.createElement("INPUT");
        fakeAreaCode.setAttribute("name", "area_code");
        fakeAreaCode.setAttribute("type", "text");
        fakeAreaCode.setAttribute("id", "area_code_ID");
        fakeAreaCode.setAttribute("value", phoneNumNums[1].value);
        document.getElementById("fakeForm").appendChild(fakeAreaCode);
        //PhoneNum1
        var fakePN1 = document.createElement("INPUT");
        fakePN1.setAttribute("name", "pn1");
        fakePN1.setAttribute("type", "text");
        fakePN1.setAttribute("id", "pn1_ID");
        fakePN1.setAttribute("value", phoneNumNums[2].value);
        document.getElementById("fakeForm").appendChild(fakePN1);
        //PhoneNum2
        var fakePN2 = document.createElement("INPUT");
        fakePN2.setAttribute("name", "pn2");
        fakePN2.setAttribute("type", "text");
        fakePN2.setAttribute("id", "pn2_ID");
        fakePN2.setAttribute("value", phoneNumNums[3].value);
        document.getElementById("fakeForm").appendChild(fakePN2);
        
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
