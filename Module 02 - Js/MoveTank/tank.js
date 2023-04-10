var image = document.getElementById("image");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"

function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
    } else if (e.keyCode == '39') {   // right arrow
    	console.log("right arrow");
    	image.style.backgroundPosition = `164px 0px`; // check goed de rupsband
    }
}

var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {
  clearInterval(tID);
} //end of stopAnimate()


function animateScript() {

  var position = 164; //start position for the image slicer
  const interval = 100; //100 ms of interval for the setInterval()
  const diff = 80; //diff as a variable for position offset
  
  tID = setInterval(() => {
  
    document.getElementById("image").style.backgroundPosition =
    `${position}px 0px`;
    //we use the ES6 template literal to insert the variable "position"
    
    if (position < 2560) {
      position = position + diff;
    }
    //we increment the position by 256 each time
    else {
      position = 80;
    }
    //reset the position to 256px, once position exceeds 1536px
    
  }, interval); //end of setInterval
} //end of animateScript()
