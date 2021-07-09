var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=200;
rover_x=10;
rover_y=10;

rover_image="hi.jpg";
function load(){
  
    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_image;
}

function uploadrover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
if (keyPressed==82){
    load()
}}

































rovern_width=100;
rovern_height=200;
rovern_x=100;
rovern_y=10;

rovern_imagen="by.jpg";
function loadn(){
  
    rovern_imagetag=new Image();
    rovern_imagetag.onload=uploadrovern();
    rovern_imagetag.src=rovern_image;
}

function uploadrovern(){
    ctx.drawImage(rovern_imagetag,rovern_x,rovern_y,rovern_width,rovern_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
if (keyPressed==71){
    loadn()
}}