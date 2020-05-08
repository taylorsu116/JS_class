const myVideo = document.getElementById('myVideo');
const myAudio = document.getElementById('myAudio');
const enter = document.getElementById('enter');
timer = null;
let counter=0;
enter.addEventListener('cilck', enterPressed);
enter.addEventListener('keydown', keyPressed);
document.body.style.backgroundColor = "lightGray";

//gif, audio
const vids = ["asset/video00-s.gif","asset/video01-s.gif","asset/video02-s.gif", "asset/video03-s.gif", "asset/video04-s.gif"];
const audio = ["asset/audio00.mp3", "asset/audio01.mp3", "asset/audio02.mp3", "asset/audio03.mp3", "asset/audio04.mp3"];
let vidPlaying = 0;
let audioPlaying = 0;

// function preload(vids){
//     for (var i = 0; i <vids.length; i++) {
//         (new Image()).src = vids[i];
//     }
// }
//default
myVideo.src = vids[vidPlaying];
myAudio.src = audio[audioPlaying];
myAudio.play();

myVideo.onload = function(){
    
}

function keyPressed(){
    if(keyCode === 13){
        enterPressed();
    }
}

function enterPressed(){
    counter++;
    console.log(counter);
    if(counter==8){
        vidPlaying = 2;
        audioPlaying = 2;
        counter=-1;
        document.body.style.backgroundColor = "MediumBlue";
        document.getElementById("head").style.color = "white";
        document.getElementById("head2").style.color = "white";
        document.getElementById("number").style.color = "white";
        document.getElementById("foot").style.color = "white";
    }else if(counter==3){
        vidPlaying = 3;
        audioPlaying = 3;
        document.body.style.backgroundColor = "lightGray";
        document.getElementById("head").style.color = "black";
        document.getElementById("head2").style.color = "black";
        document.getElementById("number").style.color = "black";
        document.getElementById("foot").style.color = "black"; 
    }else if(counter==6){
        vidPlaying = 4;
        audioPlaying = 4;
        document.body.style.backgroundColor = "lightGray";
        document.getElementById("head").style.color = "black";
        document.getElementById("head2").style.color = "black";
        document.getElementById("number").style.color = "black";
        document.getElementById("foot").style.color = "black";   
    }else if(counter==0){
        vidPlaying = 0;
        audioPlaying = 0;
        document.body.style.backgroundColor = "lightGray";
        document.getElementById("head").style.color = "black";
        document.getElementById("head2").style.color = "black";
        document.getElementById("number").style.color = "black";
        document.getElementById("foot").style.color = "black";   
    }else {
        vidPlaying = 1;
        audioPlaying = 1;
        document.body.style.backgroundColor = "lightGray";
        document.getElementById("head").style.color = "black";
        document.getElementById("head2").style.color = "black";
        document.getElementById("number").style.color = "black";
        document.getElementById("foot").style.color = "black";
    }
    myAudio.src = audio[audioPlaying];
    myAudio.play();
    myVideo.src =vids[vidPlaying];
    
}

