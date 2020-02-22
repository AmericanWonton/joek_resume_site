/* Sets if navigation to '0',(not visible, but able to be clicked) on page load */
var whichPic1 = 0; /* This is supposed to have 3 pics so far...3 dogs */
var whichPic2 = 0; /* This is supposed to have 3 pics so far...3 dogs */
var whichPic3 = 0; /* This is supposed to have 3 pics so far...3 dogs */

var count = 0; /* This is used for our fading pictures */
var canClick = true; /* This is used to see when the User can click,(if transition is done). */



/* The first three functions are called when a User clicks either the left or right
Arrow buttons to change the pictures...they are used to add 1 or lose 1 to the 'whichpic' variable associated
to it. 
*/

function changePicSet(leftOright, setOPics){
    /* Take the integer, (0 is go back, 1 is go forward) and return which pic should be displayed */
    if (leftOright === 0) {
        /* Which set of Pictures is getting moved? 0 is top, 1 is middle, 2 is bottom. */
        switch(setOPics){
            case 0:
                //Top set of pics getting moved down. 
                if (whichPic1 === 0){
                    whichPic1 = 2;
                }else{
                    whichPic1 = whichPic1 -1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic1, "bigprojectpicture_mobile1");
                break;
            case 1:
                //Middle set of pics getting moved down. 
                if (whichPic2 === 0){
                    whichPic2 = 3;
                }else{
                    whichPic2 = whichPic2 -1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic2, "bigprojectpicture_mobile2");
                break;
            case 2:
                //Bottom set of pics getting moved down. 
                if (whichPic3 === 0){
                    whichPic3 = 2;
                }else{
                    whichPic3 = whichPic3 -1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic3, "bigprojectpicture_mobile3");
                break;
            default:
                //This is an error display. 
                console.log("Error in flipping pictures in test.js.(Default section).");
        }
    } else if (leftOright === 1) {
        /* Which set of Pictures is getting moved? 0 is top, 1 is middle, 2 is bottom. */
        switch(setOPics){
            case 0:
                //Top set of pics getting moved up. 
                if (whichPic1 === 2){
                    whichPic1 = 0;
                }else{
                    whichPic1 = whichPic1 + 1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic1, "bigprojectpicture_mobile1");
                break;
            case 1:
                //Middle set of pics getting moved up. 
                if (whichPic2 === 3){
                    whichPic2 = 0;
                }else{
                    whichPic2 = whichPic2 + 1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic2, "bigprojectpicture_mobile2");
                break;
            case 2:
                //Bottom set of pics getting moved up. 
                if (whichPic3 === 2){
                    whichPic3 = 0;
                }else{
                    whichPic3 = whichPic3 + 1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic3, "bigprojectpicture_mobile3");
                break;
            default:
                //This is an error display. 
                console.log("Error in flipping pictures in test.js.(Default section).");
        }
    } else {
        console.log("Error in flipping pictures in test.js.");
    }
    return whichPic1;
}

/* Displays the selected picture, taking in the picture num and a string of what ID to target */
function displayPicSet(pictureNum, targetedID){
    //which set of pictures is being changed?
    switch(targetedID){
        case "bigprojectpicture_mobile1":
            //Find change pic based on num
            switch (pictureNum){
                case 0:
                    //Display first picture for group pic 1
                    var dogPic = document.getElementById("bigprojectpicture_mobile1");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/test_image.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 1:
                    //Display second picture for group pic 1
                    var dogPic = document.getElementById("bigprojectpicture_mobile1");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/test_image_2.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 2:
                    //Display third picture for group pic 1
                    var dogPic = document.getElementById("bigprojectpicture_mobile1");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/test_image_3.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                default:
                    //write error
                    console.log("Error in flipping pictures in test.js.(Area1).");
            }
            break;
        case "bigprojectpicture_mobile2":
            //Find change pic based on num
            switch (pictureNum){
                case 0:
                    //Display first picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile2");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/test_image.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 1:
                    //Display second picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile2");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/test_image_2.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 2:
                    //Display third picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile2");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/test_image_3.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 3:
                    //Display fourth picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile2");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/test_image_4.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                default:
                    //write error
                    console.log("Error in flipping pictures in test.js.(Area2).");
                    //Logic is working fine, not sure why it is erroring here... 
                    console.log("Logic is working fine, not sure why it is erroring here");
            }
            break;
        case "bigprojectpicture_mobile3":
            //Find change pic based on num
            switch (pictureNum){
                case 0:
                    //Display first picture for group pic 3
                    var dogPic = document.getElementById("bigprojectpicture_mobile3");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/test_image.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 1:
                    //Display second picture for group pic 3
                    var dogPic = document.getElementById("bigprojectpicture_mobile3");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/test_image_2.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 2:
                    //Display first picture for group pic 3
                    var dogPic = document.getElementById("bigprojectpicture_mobile3");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/test_image_3.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                default:
                    //write error
                    console.log("Error in flipping pictures in test.js.(Area3).");
            }
            break;
        default:
            //write the error. 
            console.log("Error in flipping pictures in test.js.(The 'displayPicSet' function, in targetID).");
            break;
    }
}

function testFunc(){
    var elem = document.getElementById("stuffshower");
    elem.style.transition = "opacity .1s linear 0s";
    elem.style.opacity = "0";
    setTimeout(function() {
        elem.innerHTML = "Hey, we changed the HTML, okay?";
        elem.style.transition = "opacity .1s linear 0s";
        elem.style.opacity = "1";
    }, 100);
}

function superTest(){
    document.getElementById("bigprojectpicture_mobile1").src = "img/test_image_2.jpg";
}

/* This is for testing our email submission */
function emailSend(){
    var email = document.getElementById('email_submission');
    var name = document.getElementById('name_submission');
    var message = document.getElementById('message_submission');
    var successOrNot = document.getElementById('success_email');

    if (!email.value || !name.value || !message.value){
        /* This will print an error because there is nothing in those fields */
        successOrNot.innerHTML = "You didn't fill everything out!";
    } else {
        successOrNot.innerHTML = "Success! Email sent!";
    }

}

/* This is for testing the gradually fading photos */
function picFade(whichGallery){
    //Set source strings to change into.
    switch (whichGallery){
        case 0:
            //This is for the first set of pic gallery
            console.log("Hey, we changing pictures on gallery " + whichGallery);
            var picsArray = ["img/GameDesign/combat_board.png", "img/GameDesign/combat_board2.png", 
            "img/GameDesign/die-r-combat-dice.jpg", "img/GameDesign/Die-R-Combat-Game-Pic.png", 
            "img/GameDesign/die-r-combat-paper-page.jpg", "img/GameDesign/die-r-combat-RulePage.jfif"];
            var fadingPic = document.getElementById("fadingImage");
            var myCount = setInterval(fadePic, 8000);
    }
    
    function fadePic(){
        pictureOrder = pictureOrder + 1;
        if (pictureOrder > picsArray.length -1){
            pictureOrder = 0;
            //Fade the picture out
            fadingPic.style.transition = "opacity 2s linear 0s";
            fadingPic.style.opacity = "0";
            var oof = setInterval(unFadePic, 4000);
        } else {
            //Fade the picture out
            fadingPic.style.transition = "opacity 2s linear 0s";
            fadingPic.style.opacity = "0";
            var oof = setInterval(unFadePic, 4000);
        }

        function unFadePic(){
            fadingPic.src = picsArray[pictureOrder];
            fadingPic.style.transition = "opacity 2s linear 0s";
            fadingPic.style.opacity = "1";
            fadingPic.src = picsArray[pictureOrder];
            clearInterval(oof);
        }

    }

}

function picFade2 (amountODivs){
    console.log("Hey, we changing pictures on gallery ");
    console.log("Picture Order is currently: " + pictureOrder);
    var picHolder = document.getElementById("picHolder");
    var myStages = picHolder.getElementsByTagName("div");

    if (pictureOrder != 0){
        myStages[pictureOrder].style.transition = "opacity 2s linear 0s";
        myStages[pictureOrder].style.opacity = "0";
        pictureOrder = pictureOrder - 1;
    } else if (pictureOrder === 0){
        myStages[pictureOrder].style.transition = "opacity 2s linear 0s";
        myStages[pictureOrder].style.opacity = "0";
        pictureOrder = picHolder.length - 1;
    } else {
        console.log("We got a problem, buddy.");
    }

    

    /* This begins the start of the fade loop for all the pictures */
    /*
    var picLoop = setInterval(startLooping(pictureOrder), 6000);

    function startLooping (pictureOrder){
        myStages[pictureOrder].style.transition = "opacity 2s linear 0s";
        fadingPic.style.opacity = "0";
    }

    */
    
}

function picFader1(){
    var ourPhotos = new Array (
    "img/GameDesign/combat_board.png", "img/GameDesign/combat_board2.png", 
    "img/GameDesign/Die+R+Combat_TitlePage.png", "img/GameDesign/die-r-combat-dice.jpg",
    "img/GameDesign/Die-R-Combat-Game-Pic.png", "img/GameDesign/die-r-combat-paper-page.jpg", 
    "img/GameDesign/die-r-combat-RulePage.jfif", "img/GameDesign/Drone+Shot.png",
    "img/GameDesign/global_game_jam_2019.jpg", "img/GameDesign/python_DRC.jfif", 
    "img/GameDesign/python_DRC2.jfif", "img/GameDesign/Sewer_pic.png",
    "img/GameDesign/team_photo_game_jam_2019.jpg", "img/GameDesign/Trashtronaught_cover_photo.png");
    console.log("Starting Fade Counter. Counter is at: " + count);
    var theInterval = setInterval(picFader1, 14000);
    console.log("Starting to transition from pic " + count + " to pic " + (count + 1));
    setTimeout(unFader, 3500);
    var fadingPic = document.getElementById("transpicHolder");
    var fadingActualPic = document.getElementById("bigprojectpicture_mobile1");

    fadingPic.style.transition = "opacity 2s linear 0s";
    fadingPic.style.opacity = "0";

    function unFader(){
        console.log("Okay, we're unfading rn");
        if (count > ourPhotos.length -1){
            count = 0;
        } else{
            count = count + 1;
        }
        fadingActualPic.src = ourPhotos[count];
        fadingPic.style.transition = "opacity 2s linear 0s";
        fadingPic.style.opacity = "1";
    }
    
    /*
    if (canClick === true){
        canClick = false;
        console.log("Started with a click. Can click is " + canClick);
        var fadingPic = document.getElementById("transpicHolder");
        var fadingActualPic = document.getElementById("bigprojectpicture_mobile1");

        fadingPic.style.transition = "opacity 2s linear 0s";
        fadingPic.style.opacity = "0";
        setTimeout(unFader, 6000);

        function unFader(){
            console.log("Okay, we're unfading rn");
            fadingActualPic.src = "img/GameDesign/die-r-combat-RulePage.jfif";
            fadingPic.style.transition = "opacity 2s linear 0s";
            fadingPic.style.opacity = "1";
            setTimeout(resetClick, 2100);
            function resetClick(){
                canClick = true;
                count = count + 1;
                console.log("Can Click is now " + canClick);
            }
        }

    }else{
        console.log("Started with a click. Can click is " + canClick);
    }
    */
}