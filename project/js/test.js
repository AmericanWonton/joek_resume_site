/* Sets if navigation to '0',(not visible, but able to be clicked) on page load */
var whichPic1 = 0;
var whichPic2 = 0;
var whichPic3 = 0;

/* The first three functions are called when a User clicks either the left or right
Arrow buttons to change the pictures...they are used to add 1 or lose 1 to the 'whichpic' variable assossiated
to it. 
*/

function changePicSet1(leftOright){
    /* Take the integer, (0 is go back, 1 is go forward) and return which pic should be displayed */
    if (leftOright === 0) {
        /* Check to see if whichPic1 is at 0 already. Set it to the top pic if it is... */
        if (whichPic1 === 0){
            whichPic1 = 2;
        }else {
            whichPic1 = whichPic1 - 1;
        }
    } else if (leftOright === 1) {
        /* Check to see if whichPic1 is at 2 already. Set it to the bottom pic if it is... */
        if (whichPic1 === 2){
            whichPic1 = 0;
        }else {
            whichPic1 = whichPic1  + 1;
        }
    } else {
        console.log("Error in flipping pictures in test.js.");
    }
    return whichPic1;
}

function changePicSet2(leftOright){
    /* Take the integer, (0 is go back, 1 is go forward) and return which pic should be displayed */
    if (leftOright === 0) {
        /* Check to see if whichPic1 is at 0 already. Set it to the top pic if it is... */
        if (whichPic2 === 0){
            whichPic2 = 2;
        }else {
            whichPic2 = whichPic2 - 1;
        }
    } else if (leftOright === 1) {
        /* Check to see if whichPic1 is at 2 already. Set it to the bottom pic if it is... */
        if (whichPic2 === 2){
            whichPic2 = 0;
        }else {
            whichPic2 = whichPic2  + 1;
        }
    } else {
        console.log("Error in flipping pictures in test.js.");
    }
    return whichPic2;
}

function changePicSet3(leftOright){
    /* Take the integer, (0 is go back, 1 is go forward) and return which pic should be displayed */
    if (leftOright === 0) {
        /* Check to see if whichPic1 is at 0 already. Set it to the top pic if it is... */
        if (whichPic3 === 0){
            whichPic3 = 2;
        }else {
            whichPic3 = whichPic3 - 1;
        }
    } else if (leftOright === 1) {
        /* Check to see if whichPic1 is at 2 already. Set it to the bottom pic if it is... */
        if (whichPic3 === 2){
            whichPic3 = 0;
        }else {
            whichPic3 = whichPic3  + 1;
        }
    } else {
        console.log("Error in flipping pictures in test.js.");
    }
    return whichPic3;
}

/* The below three functions determine which pic is displayed based on the 'whichpic' number */

function picClick1 (){
    
}

function picClick1 (){
    
}

function picClick1 (){
    
}