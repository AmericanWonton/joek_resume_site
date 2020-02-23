/* Sets if navigation to '0',(not visible, but able to be clicked) on page load */
var whichPic1 = 0; /* This is supposed to have 3 pics so far...3 dogs */
var whichPic2 = 0; /* This is supposed to have 3 pics so far...3 dogs */
var whichPic3 = 0; /* This is supposed to have 3 pics so far...3 dogs */

//These are defined categorically by each section of the page.
var ourPhotos1 = new Array ("img/GameDesign/Trashtronaught_cover_photo.png", "img/GameDesign/Sewer_pic.png",
                            "img/GameDesign/Drone+Shot.png", "img/GameDesign/global_game_jam_2019.jpg",
                            "img/GameDesign/team_photo_game_jam_2019.jpg");
var ourPhotos2 = new Array ("img/GameDesign/combat_board.png", "img/GameDesign/combat_board2.png", 
"img/GameDesign/Die+R+Combat_TitlePage.png", "img/GameDesign/die-r-combat-dice.jpg",
"img/GameDesign/Die-R-Combat-Game-Pic.png", "img/GameDesign/die-r-combat-paper-page.jpg",
"img/GameDesign/die-r-combat-RulePage.jfif", "img/GameDesign/python_DRC.jfif",
"img/GameDesign/python_DRC2.jfif");
var ourPhotos3 = new Array ("img/levelDesign/Bathroom.png", "img/levelDesign/Buck+E+Cheese+Hallway.png",
                            "img/levelDesign/Dice+Stuff.png", "img/levelDesign/Eating+Room.png",
                            "img/levelDesign/Elevator+Stuff.png", "img/levelDesign/ElevatorHallway.png",
                            "img/levelDesign/Grave+Area.png", "img/levelDesign/Into+Bathroom.png",
                            "img/levelDesign/Level+Artway.png", "img/levelDesign/Level+Hallway.png",
                            "img/levelDesign/Prayer+Room.png");
//This is to control which section is allowed to transition.
canClickArray = new Array(true, true, true);
countArray = new Array(0, 0, 0);

/* The first three functions are called when a User clicks either the left or right
Arrow buttons to change the pictures...they are used to add 1 or lose 1 to the 'whichpic' variable associated
to it. 
*/

function changePicSet(leftOright, setOPics){
    /* Take the integer, (0 is go back, 1 is go forward) and return which pic should be displayed */
    if (leftOright === 0) {
        /* Which set of Pictures is getting moved? 0 is Trashtronaught, 1 is Die-R-Combat, 2 is LevelDesign Test Level. */
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
                //Die-R-Combat set of pics getting moved down. 
                if (whichPic2 === 0){
                    whichPic2 = 8;
                }else{
                    whichPic2 = whichPic2 - 1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic2, "bigprojectpicture_mobile2");
                break;
            case 2:
                //Level Design set of pics getting moved down. 
                if (whichPic3 === 0){
                    whichPic3 = 10;
                }else{
                    whichPic3 = whichPic3 -1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic3, "bigprojectpicture_mobile3");
                break;
            case 3:
                //Storyboards getting moved down
                if (whichPic3 === 0){
                    whichPic3 = 7;
                }else{
                    whichPic3 = whichPic3 -1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic3, "bigprojectpicture_mobile4");
                break;
            default:
                //This is an error display. 
                console.log("Error in flipping pictures in test.js.(Default section).");
        }
    } else if (leftOright === 1) {
        /* Which set of Pictures is getting moved? 0 is top, 1 is middle, 2 is bottom. */
        switch(setOPics){
            case 0:
                //Trashtronaught set of pics getting moved up. 
                if (whichPic1 === 4){
                    whichPic1 = 0;
                }else{
                    whichPic1 = whichPic1 + 1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic1, "bigprojectpicture_mobile1");
                break;
            case 1:
                //Die-R-Combat set of pics getting moved up. 
                if (whichPic2 === 8){
                    whichPic2 = 0;
                }else{
                    whichPic2 = whichPic2 + 1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic2, "bigprojectpicture_mobile2");
                break;
            case 2:
                //Level Design set of pics getting moved up. 
                if (whichPic3 === 10){
                    whichPic3 = 0;
                }else{
                    whichPic3 = whichPic3 + 1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic3, "bigprojectpicture_mobile3");
                break;
            case 3:
                //Storyboards set of pics getting moved up. 
                if (whichPic3 === 7){
                    whichPic3 = 0;
                }else{
                    whichPic3 = whichPic3 + 1;
                }
                // Display picture based on switch num
                displayPicSet(whichPic3, "bigprojectpicture_mobile4");
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
                        dogPic.src = "img/bmp/gameDesign/Trashtronaught_cover_photo.bmp";
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
                        dogPic.src = "img/bmp/gameDesign/global_game_jam_2019.bmp";
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
                        dogPic.src = "img/bmp/gameDesign/team_photo_game_jam_2019.bmp";
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
                        dogPic.src = "img/bmp/gameDesign/Drone+Shot.bmp";
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
                        dogPic.src = "img/bmp/gameDesign/Sewer_pic.bmp";
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
                        dogPic.src = "iimg/bmp/gameDesign/Die+R+Combat_TitlePage.bmp";
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
                        dogPic.src = "img/bmp/gameDesign/combat_board.bmp";
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
                        dogPic.src = "img/bmp/gameDesign/combat_board2.bmp";
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
                        dogPic.src = "img/bmp/gameDesign/Die-R-Combat-Game-Pic.bmp";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 4:
                    //Display fifth picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile2");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/bmp/gameDesign/die-r-combat-dice.bmp";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 5:
                    //Display sixth picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile2");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/bmp/gameDesign/die-r-combat-paper-page.bmp";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 6:
                    //Display seventh picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile2");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/bmp/gameDesign/die-r-combat-RulePage.bmp";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 7:
                    //Display eighth picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile2");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/bmp/gameDesign/python_DRC.bmp";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 8:
                    //Display ninth picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile2");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/bmp/gameDesign/python_DRC2.bmp";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
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
                        dogPic.src = "img/levelDesign/Bathroom.png";
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
                        dogPic.src = "img/levelDesign/Buck+E+Cheese+Hallway.png";
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
                        dogPic.src = "img/levelDesign/Dice+Stuff.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 3:
                    //Display first picture for group pic 3
                    var dogPic = document.getElementById("bigprojectpicture_mobile3");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/levelDesign/Eating+Room.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 4:
                    //Display first picture for group pic 3
                    var dogPic = document.getElementById("bigprojectpicture_mobile3");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/levelDesign/Elevator+Stuff.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 5:
                    //Display first picture for group pic 3
                    var dogPic = document.getElementById("bigprojectpicture_mobile3");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/levelDesign/ElevatorHallway.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 6:
                    //Display first picture for group pic 3
                    var dogPic = document.getElementById("bigprojectpicture_mobile3");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/levelDesign/Grave+Area.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 7:
                    //Display first picture for group pic 3
                    var dogPic = document.getElementById("bigprojectpicture_mobile3");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/levelDesign/Into+Bathroom.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 8:
                    //Display first picture for group pic 3
                    var dogPic = document.getElementById("bigprojectpicture_mobile3");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/levelDesign/Level+Artway.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 9:
                    //Display first picture for group pic 3
                    var dogPic = document.getElementById("bigprojectpicture_mobile3");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/levelDesign/Level+Hallway.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 10:
                    //Display first picture for group pic 3
                    var dogPic = document.getElementById("bigprojectpicture_mobile3");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/levelDesign/Prayer+Room.png";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                default:
                    //write error
                    console.log("Error in flipping pictures in test.js.(Area3).");
            }
            break;
        case "bigprojectpicture_mobile4":
            //Find change pic based on num
            switch (pictureNum){
                case 0:
                    //Display first picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile4");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/writing/S1.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 1:
                    //Display second picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile4");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/writing/S2.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 2:
                    //Display third picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile4");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/writing/S3.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 3:
                    //Display fourth picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile4");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/writing/S4.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 4:
                    //Display fifth picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile4");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/writing/S5.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 5:
                    //Display sixth picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile4");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/writing/S6.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 6:
                    //Display seventh picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile4");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/writing/S7.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                case 7:
                    //Display eighth picture for group pic 2
                    var dogPic = document.getElementById("bigprojectpicture_mobile4");
                    dogPic.style.transition = "opacity .1s linear 0s";
                    dogPic.style.opacity = "0";
                    setTimeout(function() {
                        dogPic.src = "img/writing/S8.jpg";
                        dogPic.style.transition = "opacity .1s linear 0s";
                        dogPic.style.opacity = "1";
                    }, 100);
                    break;
                default:
                    //write error
                    console.log("Error in flipping pictures in test.js.(Area 4).");
                    //Logic is working fine, not sure why it is erroring here... 
                    console.log("Logic is working fine, not sure why it is erroring here");
            }
            break;
        default:
            //write the error. 
            console.log("Error in flipping pictures in test.js.(The 'displayPicSet' function, in targetID).");
            break;
    }
}

/* This changes the selected picture when hovered over by the User */
function picFader1(whichPics){
    switch (whichPics){
        case 0:
            //Flip through the Trashtronaught pics
            if (canClickArray[0] === true){
                console.log("Okay, we're fading rn from " + countArray[0] + " to " + (countArray[0] + 1));
                canClickArray[0] = false;
                var fadingPic = document.getElementById("transpicHolder");
                var fadingActualPic = document.getElementById("fadingPic");
        
                fadingPic.style.transition = "opacity 2s linear 0s";
                fadingPic.style.opacity = "0";
                setTimeout(unFader, 3000);
        
                function unFader(){
                    console.log("Okay, we're unfading rn");
                    setTimeout(resetClick, 2100);
                    if (countArray[0] >= (ourPhotos1.length - 1)){
                        countArray[0] = 0;
                    } else{
                        countArray[0] = countArray[0] + 1;
                    }
                    fadingActualPic.src = ourPhotos1[countArray[0]];
                    fadingPic.style.transition = "opacity 2s linear 0s";
                    fadingPic.style.opacity = "1";
        
                    function resetClick(){
                        canClickArray[0] = true;
                    }
                }
            } else {
                console.log("Canclick is still " + canClickArray[0]);
            }
            break;
        case 1:
            //Flips through the Die-R-Combat pics
            if (canClickArray[1] === true){
                console.log("Okay, we're fading rn from " + countArray[1] + " to " + (countArray[1] + 1));
                canClickArray[1] = false;
                var fadingPic = document.getElementById("transpicHolder1");
                var fadingActualPic = document.getElementById("fadingPic1");
        
                fadingPic.style.transition = "opacity 2s linear 0s";
                fadingPic.style.opacity = "0";
                setTimeout(unFader, 3000);
        
                function unFader(){
                    console.log("Okay, we're unfading rn");
                    setTimeout(resetClick, 2100);
                    if (countArray[1] >= (ourPhotos2.length - 1)){
                        countArray[1] = 0;
                    } else{
                        countArray[1] = countArray[1] + 1;
                    }
                    fadingActualPic.src = ourPhotos2[countArray[1]];
                    fadingPic.style.transition = "opacity 2s linear 0s";
                    fadingPic.style.opacity = "1";
        
                    function resetClick(){
                        canClickArray[1] = true;
                    }
                }
            } else {
                console.log("Canclick is still " + canClickArray[1]);
            }
            break;
        case 2:
            //Flips through the Test Level pics
            if (canClickArray[2] === true){
                console.log("Okay, we're fading rn from " + countArray[2] + " to " + (countArray[2] + 1));
                canClickArray[1] = false;
                var fadingPic = document.getElementById("transpicHolder2");
                var fadingActualPic = document.getElementById("fadingPic2");
        
                fadingPic.style.transition = "opacity 2s linear 0s";
                fadingPic.style.opacity = "0";
                setTimeout(unFader, 3000);
        
                function unFader(){
                    console.log("Okay, we're unfading rn");
                    setTimeout(resetClick, 2100);
                    if (countArray[2] >= (ourPhotos3.length - 1)){
                        countArray[2] = 0;
                    } else{
                        countArray[2] = countArray[2] + 1;
                    }
                    fadingActualPic.src = ourPhotos3[countArray[2]];
                    fadingPic.style.transition = "opacity 2s linear 0s";
                    fadingPic.style.opacity = "1";
        
                    function resetClick(){
                        canClickArray[2] = true;
                    }
                }
            } else {
                console.log("Canclick is still " + canClickArray[2]);
            }
            break;
        default:
            //There is some sort of error. 
            console.log("Error, you shouldn't be here at " + whichPics);
            break;
    }
    
}