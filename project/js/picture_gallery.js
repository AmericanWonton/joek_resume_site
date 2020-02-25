
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
var ourPhotos4 = new Array ("img/writing/s1.jpg", "img/writing/s2.jpg", "img/writing/s3.jpg",
                            "img/writing/s4.jpg", "img/writing/s5.jpg", "img/writing/s6.jpg",
                            "img/writing/s7.jpg", "img/writing/s8.jpg",);
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