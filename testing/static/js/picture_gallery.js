
//These are defined categorically by each section of the page.
var ourPhotos1 = new Array ("static/img/GameDesign/Trashtronaught_cover_photo.png", "static/img/GameDesign/Sewer_pic.png",
"static/img/GameDesign/Drone+Shot.png", "static/img/GameDesign/global_game_jam_2019.jpg",
"static/img/GameDesign/team_photo_game_jam_2019.jpg");
var ourPhotos2 = new Array ("static/img/GameDesign/combat_board.png", "static/img/GameDesign/combat_board2.png", 
"static/img/GameDesign/Die+R+Combat_TitlePage.png", "static/img/GameDesign/die-r-combat-dice.jpg",
"static/img/GameDesign/Die-R-Combat-Game-Pic.png", "static/img/GameDesign/die-r-combat-paper-page.jpg",
"static/img/GameDesign/die-r-combat-RulePage.jfif", "static/img/GameDesign/python_DRC.jfif",
"static/img/GameDesign/python_DRC2.jfif");
var ourPhotos3 = new Array ("static/img/levelDesign/Bathroom.png", "static/img/levelDesign/Buck+E+Cheese+Hallway.png",
"static/img/levelDesign/Dice+Stuff.png", "static/img/levelDesign/Eating+Room.png",
"static/img/levelDesign/Elevator+Stuff.png", "static/img/levelDesign/ElevatorHallway.png",
"static/img/levelDesign/Grave+Area.png", "static/img/levelDesign/Into+Bathroom.png",
"static/img/levelDesign/Level+Artway.png", "static/img/levelDesign/Level+Hallway.png",
"static/img/levelDesign/Prayer+Room.png");
var ourPhotos4 = new Array ("static/img/writing/s1.jpg", "static/img/writing/s2.jpg", "static/img/writing/s3.jpg",
"static/img/writing/s4.jpg", "static/img/writing/s5.jpg", "static/img/writing/s6.jpg",
"static/img/writing/s7.jpg", "static/img/writing/s8.jpg");
//This is to control which section is allowed to transition.
canClickArray = new Array(true, true, true, true);
countArray = new Array(0, 0, 0, 0);

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
                canClickArray[2] = false;
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
        case 3:
            //Flips through the Storyboard pics
            if (canClickArray[3] === true){
                console.log("Okay, we're fading rn from " + countArray[3] + " to " + (countArray[3] + 1));
                canClickArray[3] = false;
                var fadingPic = document.getElementById("transpicHolder3");
                var fadingActualPic = document.getElementById("fadingPic3");
        
                fadingPic.style.transition = "opacity 2s linear 0s";
                fadingPic.style.opacity = "0";
                setTimeout(unFader, 3000);
        
                function unFader(){
                    console.log("Okay, we're unfading rn");
                    setTimeout(resetClick, 2100);
                    if (countArray[3] >= (ourPhotos4.length - 1)){
                        countArray[3] = 0;
                    } else{
                        countArray[3] = countArray[3] + 1;
                    }
                    fadingActualPic.src = ourPhotos4[countArray[3]];
                    fadingPic.style.transition = "opacity 2s linear 0s";
                    fadingPic.style.opacity = "1";
        
                    function resetClick(){
                        canClickArray[3] = true;
                    }
                }
            } else {
                console.log("Canclick is still " + canClickArray[3]);
            }
            break;
        default:
            //There is some sort of error. 
            console.log("Error, you shouldn't be here at " + whichPics);
            break;
    }
    
}