var image = document.getElementById("image");
const tankmovement = [84,168,252,336,420,504,588,672]
let banden = 0;
let posleft = 0;
let postop = 0;

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"

function moveRight() {
    posleft += 10
    document.getElementById('image').style.left  = posleft + `px`;  
    console.log(document.getElementById('image').style.left)
}   

function moveLeft() {
    posleft -= 10
    document.getElementById('image').style.left  = posleft + `px`;  

}   

// function moveUp() {
//     posleft += 10
//     document.getElementById('image').style.top  = postop + `px`;  
// }   

// function moveDown() {
//     posleft -= 10
//     document.getElementById('image').style.top  = postop + `px`;  
// }   

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
        image.style.transform = "rotate(-90deg)"
        moveLeft()
    	image.style.backgroundPosition = tankmovement[banden] + `px 0px`; // check goed de rupsband
        banden++;
        if (banden >= 7) {
            banden = 0;
        }

    } else if (e.keyCode == '39') {   // right arrow
    	console.log("right arrow");
        image.style.transform = "rotate(90deg)"
        moveRight()
    	image.style.backgroundPosition = tankmovement[banden] + `px 0px`; // check goed de rupsband
        banden++;
        if (banden >= 7) {
            banden = 0;
        }
        
    }
}