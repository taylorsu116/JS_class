const myVideo = document.getElementById('myVideo');
const myAudio = document.getElementById('myAudio');
const enter = document.getElementById('enter');
let counter=0;
enter.addEventListener('cilck', enterPressed);
enter.addEventListener('keydown', keyPressed);
document.body.style.backgroundColor = "lightGray";

//text color change
const tags= ["head", "head2", "number", "foot", "here", "here2", "here3", "lat", "long", "note", "note2"];
let i;
let text;  

//gif, audio
const vids = ["asset/video00-s.gif","asset/video01-s.gif","asset/video02-s.gif", "asset/video03-s.gif", "asset/video04-s.gif", "asset/bubble01.gif", "asset/bubble02.gif", "asset/bubble03.gif", "asset/bubble04.gif"];
const audio = ["asset/audio00.mp3", "asset/audio01.mp3", "asset/audio02.mp3", "asset/audio03.mp3", "asset/audio04.mp3", "asset/audio_bubble01.mp3", "asset/audio_bubble02.mp3", "asset/audio_bubble03.mp3", "asset/audio_bubble04_2.mp3"];
let vidPlaying = 0;
let audioPlaying = 0;

function preload(vids){
    for (var i = 0; i <vids.length; i++){
        (new Image()).src = vids[i];
    }
}

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
//resultA
if(counter==8){
    vidPlaying = 2;
    audioPlaying = 2;
    document.body.style.backgroundColor = "MediumBlue";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "white";
    } 
//reaction02
} else if(counter==3){
    vidPlaying = 3;
    audioPlaying = 3;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
//reaction03
} else if(counter==6){
    vidPlaying = 4;
    audioPlaying = 4;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
//bubble01
} else if(counter== 9){
    vidPlaying = 5;
    audioPlaying = 5;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
//bubble01
} else if(counter== 10){
    vidPlaying = 5;
    audioPlaying = 5;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
//bubble02
} else if(counter==11){
    vidPlaying = 6;
    audioPlaying = 6;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
//bubble01
} else if(counter== 12){
    vidPlaying = 5;
    audioPlaying = 5;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
//bubble01
} else if(counter== 13){
    vidPlaying = 5;
    audioPlaying = 5;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
//bubble03 
} else if(counter==14){
    vidPlaying = 7;
    audioPlaying = 7;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
//bubble01
} else if(counter== 15){
    vidPlaying = 5;
    audioPlaying = 5;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
//bubble01
} else if(counter== 16){
    vidPlaying = 5;
    audioPlaying = 5;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
//resultB 
} else if(counter== 17){
    vidPlaying = 8;
    audioPlaying = 8;
    counter=-1;
    document.body.style.backgroundColor = "MediumBlue";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "white";
    } 
//reaction00
} else if(counter==0){
    vidPlaying = 0;
    audioPlaying = 0;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
//reaction01
} else {
    vidPlaying = 1;
    audioPlaying = 1;
    document.body.style.backgroundColor = "lightGray";
    for (i = 0; i< tags.length; i++){ 
        text = document.getElementById(tags[i]);
        text.style.color = "black";
    } 
}
    myAudio.src = audio[audioPlaying];
    myAudio.play();
    myVideo.src =vids[vidPlaying];
}

function geoFindMe() {

    let status = document.getElementById('status');
    let lat = document.getElementById('lat');
    let long = document.getElementById('long');
  
    function success(position) {
      let latitude  = position.coords.latitude;
      let longitude = position.coords.longitude;
  
      status.textContent = '';
      lat.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      long.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      lat.textContent = `Latitude: ` + latitude.toFixed(2) +`°`;
      long.textContent = `Longitude: ` +  longitude.toFixed(2) +`°`;
    }
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  geoFindMe();
  