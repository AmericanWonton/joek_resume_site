/* Sets if navigation to '0',(not visible, but able to be clicked) on page load */
var pageOpen = 0;

/* Moves the navigation bar after clicking the button */
function moveNav(){

    const sidebar = document.getElementById("linkpullout");
    const navLinks = document.getElementById("navlinks");

    //Move page to open, if not open 
    if (pageOpen === 0){
        /* Here's our outer nav bar transition */
        document.getElementById("outerlinkpullout").style.width = "10%";
        document.getElementById("contentdiv").style.width = "90%";
        //moveBigNav();
        /* Here's the inner nav bar transition */
        /* 
        sidebar.style.transition = "width 0.3s ease-in 0s";
        document.getElementById("linkpullout").style.width = "50%";
        document.getElementById("navlinks1").style.display = "none";
        document.getElementById("navlinks2").style.display = "none";
        document.getElementById("navlinks3").style.display = "none";
        */
        
        pageOpen = 1;
    }else{
        sidebar.style.transition = "width 0.3s ease-in 0s";
        document.getElementById("linkpullout").style.width = "50%";
        document.getElementById("navlinks1").style.display = "block";
        document.getElementById("navlinks2").style.display = "block";
        document.getElementById("navlinks3").style.display = "block";
        pageOpen = 0;
    }
}

function moveBigNav() {
    const outerLink = document.getElementsByID("outerlinkpullout");

    if (pageOpen === 0){
        /* Here's the main side bar animation*/
        outerLink.style.transition = "width 0.3s ease-in .0s";
        document.getElementById("outerlinkpullout").style.width = "10%";
        document.getElementById("contentdiv").style.width = "90%";
    }else {

    }
}

