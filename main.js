canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=100;
function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "37") {
        Left();
        console.log("left arrow is pressed");
    }
    if (keyPressed == "38") {
        Up();
        console.log("Up arrow is pressed");
    }
    if (keyPressed == "39") {
        Right();
        console.log("right arrow is pressed");
    }
    if (keyPressed == "40") {
        Down();
        console.log("down arrow is pressed");
    }
}