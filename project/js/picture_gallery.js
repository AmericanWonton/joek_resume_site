/* Sets if navigation to '0',(not visible, but able to be clicked) on page load */
var whichPic1 = 0; /* This is supposed to have 3 pics so far...3 dogs */
var whichPic2 = 0; /* This is supposed to have 3 pics so far...3 dogs */
var whichPic3 = 0; /* This is supposed to have 3 pics so far...3 dogs */

/* The first three functions are called when a User clicks either the left or right
Arrow buttons to change the pictures...they are used to add 1 or lose 1 to the 'whichpic' variable associated
to it. 
*/

function changePicSet(leftOright, setOPics){
    /* Take the integer, (0 is go back, 1 is go forward) and return which pic should be displayed */
    if (leftOright === 0) {
        /* Which set of Pictures is getting moved? 0 is Trashtronaught, 1 is middle, 2 is bottom. */
        switch(setOPics){
            case 0:
                //Trashtronaught set of pics getting moved down. 
                if (whichPic1 === 0){
                    whichPic1 = 4;
                }else{
                    whichPic1 = whichPic1 - 1;
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
                if (whichPic1 === 4){
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
                    //Display first picture for Trashtronaught display
                    var dogPic = document.getElementById("bigprojectpicture_mobile1");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/Trashtronaught_cover_photo.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 1:
                    //Display second picture for Trashtronaught display
                    var dogPic = document.getElementById("bigprojectpicture_mobile1");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/global_game_jam_2019.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 2:
                    //Display third picture for Trashtronaught display
                    var dogPic = document.getElementById("bigprojectpicture_mobile1");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/team_photo_game_jam_2019.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 3:
                    //Display fourth picture for Trashronaught display
                    var dogPic = document.getElementById("bigprojectpicture_mobile1");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/Drone+Shot.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 4:
                    //Display fifth picture for Trashtronaught display
                    var dogPic = document.getElementById("bigprojectpicture_mobile1");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/Sewer_pic.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
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