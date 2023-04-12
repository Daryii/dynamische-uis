var image = document.getElementById("image");
var position = 0; // initialize the position of the tank

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)";

function checkKey(e) {
    console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if (e.keyCode == 32) {
        console.log("spacebar");
    } else if (e.keyCode == '38') { // up arrow
        console.log("Up arrow");
        position -= 10; // move the tank up
        image.style.top = position + "px"; // update the top position
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        position += 10; // move the tank down
        image.style.top = position + "px"; // update the top position
    } else if (e.keyCode == '37') { // left arrow
        console.log("left arrow");
        image.style.backgroundPosition = "0px 0px"; // animate the left track
    } else if (e.keyCode == '39') { // right arrow
        console.log("right arrow");
        image.style.backgroundPosition = "-164px 0px"; // animate the right track
    }
}
