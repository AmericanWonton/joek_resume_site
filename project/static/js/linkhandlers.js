function linkHandling(whichLink){
    console.log("Which Link is: " + whichLink);
    switch(whichLink){
        case 0:
            //Redirect to index
            window.location.href = "/";
            break;
        case 1:
            //Redirect to contact
            window.location = "/contact";
            break;
        case 2:
            //Redirect to software 
            window.location.href = "/softwaredesign";
            break;
        case 3:
            //Redirect to Game Design
            window.location.href = "/gamedesign";
            break;
        case 4:
            //Redirect to level design
            window.location.href = "/leveldesign";
            break;
        case 5:
            //Redirect to writing
            window.location.href = "/writing";
            break;
        default:
            //Redirect to index, write the error to the console
            console.log("Error, redirecting to index. WhichLink is: " + whichLink);
            window.location.href = "/";
            break;
    }
}