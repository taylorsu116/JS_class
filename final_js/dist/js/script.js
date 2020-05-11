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
const vids = ["src/asset/video00.gif","src/asset/video01.gif","src/asset/video02.gif", "src/asset/video03.gif", "src/asset/video04.gif", "src/asset/bubble01.gif", "src/asset/bubble02.gif", "src/asset/bubble03.gif", "src/asset/bubble04.gif"];
const audio = ["src/asset/audio00.mp3", "src/asset/audio01.mp3", "src/asset/audio02.mp3", "src/asset/audio03.mp3", "src/asset/audio04.mp3", "src/asset/audio_bubble01.mp3", "src/asset/audio_bubble02.mp3", "src/asset/audio_bubble03.mp3", "src/asset/audio_bubble04.mp3"];
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
  
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlWaWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVZpZGVvJyk7XG5jb25zdCBteUF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215QXVkaW8nKTtcbmNvbnN0IGVudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyJyk7XG5sZXQgY291bnRlcj0wO1xuZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2lsY2snLCBlbnRlclByZXNzZWQpO1xuZW50ZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleVByZXNzZWQpO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0R3JheVwiO1xuXG4vL3RleHQgY29sb3IgY2hhbmdlXG5jb25zdCB0YWdzPSBbXCJoZWFkXCIsIFwiaGVhZDJcIiwgXCJudW1iZXJcIiwgXCJmb290XCIsIFwiaGVyZVwiLCBcImhlcmUyXCIsIFwiaGVyZTNcIiwgXCJsYXRcIiwgXCJsb25nXCIsIFwibm90ZVwiLCBcIm5vdGUyXCJdO1xubGV0IGk7XG5sZXQgdGV4dDsgIFxuXG4vL2dpZiwgYXVkaW9cbmNvbnN0IHZpZHMgPSBbXCJzcmMvYXNzZXQvdmlkZW8wMC5naWZcIixcInNyYy9hc3NldC92aWRlbzAxLmdpZlwiLFwic3JjL2Fzc2V0L3ZpZGVvMDIuZ2lmXCIsIFwic3JjL2Fzc2V0L3ZpZGVvMDMuZ2lmXCIsIFwic3JjL2Fzc2V0L3ZpZGVvMDQuZ2lmXCIsIFwic3JjL2Fzc2V0L2J1YmJsZTAxLmdpZlwiLCBcInNyYy9hc3NldC9idWJibGUwMi5naWZcIiwgXCJzcmMvYXNzZXQvYnViYmxlMDMuZ2lmXCIsIFwic3JjL2Fzc2V0L2J1YmJsZTA0LmdpZlwiXTtcbmNvbnN0IGF1ZGlvID0gW1wic3JjL2Fzc2V0L2F1ZGlvMDAubXAzXCIsIFwic3JjL2Fzc2V0L2F1ZGlvMDEubXAzXCIsIFwic3JjL2Fzc2V0L2F1ZGlvMDIubXAzXCIsIFwic3JjL2Fzc2V0L2F1ZGlvMDMubXAzXCIsIFwic3JjL2Fzc2V0L2F1ZGlvMDQubXAzXCIsIFwic3JjL2Fzc2V0L2F1ZGlvX2J1YmJsZTAxLm1wM1wiLCBcInNyYy9hc3NldC9hdWRpb19idWJibGUwMi5tcDNcIiwgXCJzcmMvYXNzZXQvYXVkaW9fYnViYmxlMDMubXAzXCIsIFwic3JjL2Fzc2V0L2F1ZGlvX2J1YmJsZTA0Lm1wM1wiXTtcbmxldCB2aWRQbGF5aW5nID0gMDtcbmxldCBhdWRpb1BsYXlpbmcgPSAwO1xuXG5mdW5jdGlvbiBwcmVsb2FkKHZpZHMpe1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDx2aWRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgKG5ldyBJbWFnZSgpKS5zcmMgPSB2aWRzW2ldO1xuICAgIH1cbn1cblxuLy9kZWZhdWx0XG5teVZpZGVvLnNyYyA9IHZpZHNbdmlkUGxheWluZ107XG5teUF1ZGlvLnNyYyA9IGF1ZGlvW2F1ZGlvUGxheWluZ107XG5teUF1ZGlvLnBsYXkoKTtcblxubXlWaWRlby5vbmxvYWQgPSBmdW5jdGlvbigpe1xufVxuXG5mdW5jdGlvbiBrZXlQcmVzc2VkKCl7XG4gICAgaWYoa2V5Q29kZSA9PT0gMTMpe1xuICAgICAgICBlbnRlclByZXNzZWQoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVudGVyUHJlc3NlZCgpe1xuICAgIGNvdW50ZXIrKztcbiAgICBjb25zb2xlLmxvZyhjb3VudGVyKTtcbi8vcmVzdWx0QVxuaWYoY291bnRlcj09OCl7XG4gICAgdmlkUGxheWluZyA9IDI7XG4gICAgYXVkaW9QbGF5aW5nID0gMjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiTWVkaXVtQmx1ZVwiO1xuICAgIGZvciAoaSA9IDA7IGk8IHRhZ3MubGVuZ3RoOyBpKyspeyBcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ3NbaV0pO1xuICAgICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIH0gXG4vL3JlYWN0aW9uMDJcbn0gZWxzZSBpZihjb3VudGVyPT0zKXtcbiAgICB2aWRQbGF5aW5nID0gMztcbiAgICBhdWRpb1BsYXlpbmcgPSAzO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodEdyYXlcIjtcbiAgICBmb3IgKGkgPSAwOyBpPCB0YWdzLmxlbmd0aDsgaSsrKXsgXG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdzW2ldKTtcbiAgICAgICAgdGV4dC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9IFxuLy9yZWFjdGlvbjAzXG59IGVsc2UgaWYoY291bnRlcj09Nil7XG4gICAgdmlkUGxheWluZyA9IDQ7XG4gICAgYXVkaW9QbGF5aW5nID0gNDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRHcmF5XCI7XG4gICAgZm9yIChpID0gMDsgaTwgdGFncy5sZW5ndGg7IGkrKyl7IFxuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnc1tpXSk7XG4gICAgICAgIHRleHQuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgfSBcbi8vYnViYmxlMDFcbn0gZWxzZSBpZihjb3VudGVyPT0gOSl7XG4gICAgdmlkUGxheWluZyA9IDU7XG4gICAgYXVkaW9QbGF5aW5nID0gNTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRHcmF5XCI7XG4gICAgZm9yIChpID0gMDsgaTwgdGFncy5sZW5ndGg7IGkrKyl7IFxuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnc1tpXSk7XG4gICAgICAgIHRleHQuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgfSBcbi8vYnViYmxlMDFcbn0gZWxzZSBpZihjb3VudGVyPT0gMTApe1xuICAgIHZpZFBsYXlpbmcgPSA1O1xuICAgIGF1ZGlvUGxheWluZyA9IDU7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0R3JheVwiO1xuICAgIGZvciAoaSA9IDA7IGk8IHRhZ3MubGVuZ3RoOyBpKyspeyBcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ3NbaV0pO1xuICAgICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIH0gXG4vL2J1YmJsZTAyXG59IGVsc2UgaWYoY291bnRlcj09MTEpe1xuICAgIHZpZFBsYXlpbmcgPSA2O1xuICAgIGF1ZGlvUGxheWluZyA9IDY7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0R3JheVwiO1xuICAgIGZvciAoaSA9IDA7IGk8IHRhZ3MubGVuZ3RoOyBpKyspeyBcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ3NbaV0pO1xuICAgICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIH0gXG4vL2J1YmJsZTAxXG59IGVsc2UgaWYoY291bnRlcj09IDEyKXtcbiAgICB2aWRQbGF5aW5nID0gNTtcbiAgICBhdWRpb1BsYXlpbmcgPSA1O1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodEdyYXlcIjtcbiAgICBmb3IgKGkgPSAwOyBpPCB0YWdzLmxlbmd0aDsgaSsrKXsgXG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdzW2ldKTtcbiAgICAgICAgdGV4dC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9IFxuLy9idWJibGUwMVxufSBlbHNlIGlmKGNvdW50ZXI9PSAxMyl7XG4gICAgdmlkUGxheWluZyA9IDU7XG4gICAgYXVkaW9QbGF5aW5nID0gNTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRHcmF5XCI7XG4gICAgZm9yIChpID0gMDsgaTwgdGFncy5sZW5ndGg7IGkrKyl7IFxuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnc1tpXSk7XG4gICAgICAgIHRleHQuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgfSBcbi8vYnViYmxlMDMgXG59IGVsc2UgaWYoY291bnRlcj09MTQpe1xuICAgIHZpZFBsYXlpbmcgPSA3O1xuICAgIGF1ZGlvUGxheWluZyA9IDc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0R3JheVwiO1xuICAgIGZvciAoaSA9IDA7IGk8IHRhZ3MubGVuZ3RoOyBpKyspeyBcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ3NbaV0pO1xuICAgICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIH0gXG4vL2J1YmJsZTAxXG59IGVsc2UgaWYoY291bnRlcj09IDE1KXtcbiAgICB2aWRQbGF5aW5nID0gNTtcbiAgICBhdWRpb1BsYXlpbmcgPSA1O1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodEdyYXlcIjtcbiAgICBmb3IgKGkgPSAwOyBpPCB0YWdzLmxlbmd0aDsgaSsrKXsgXG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdzW2ldKTtcbiAgICAgICAgdGV4dC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9IFxuLy9idWJibGUwMVxufSBlbHNlIGlmKGNvdW50ZXI9PSAxNil7XG4gICAgdmlkUGxheWluZyA9IDU7XG4gICAgYXVkaW9QbGF5aW5nID0gNTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRHcmF5XCI7XG4gICAgZm9yIChpID0gMDsgaTwgdGFncy5sZW5ndGg7IGkrKyl7IFxuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnc1tpXSk7XG4gICAgICAgIHRleHQuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgfSBcbi8vcmVzdWx0QiBcbn0gZWxzZSBpZihjb3VudGVyPT0gMTcpe1xuICAgIHZpZFBsYXlpbmcgPSA4O1xuICAgIGF1ZGlvUGxheWluZyA9IDg7XG4gICAgY291bnRlcj0tMTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiTWVkaXVtQmx1ZVwiO1xuICAgIGZvciAoaSA9IDA7IGk8IHRhZ3MubGVuZ3RoOyBpKyspeyBcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ3NbaV0pO1xuICAgICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIH0gXG4vL3JlYWN0aW9uMDBcbn0gZWxzZSBpZihjb3VudGVyPT0wKXtcbiAgICB2aWRQbGF5aW5nID0gMDtcbiAgICBhdWRpb1BsYXlpbmcgPSAwO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodEdyYXlcIjtcbiAgICBmb3IgKGkgPSAwOyBpPCB0YWdzLmxlbmd0aDsgaSsrKXsgXG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdzW2ldKTtcbiAgICAgICAgdGV4dC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9IFxuLy9yZWFjdGlvbjAxXG59IGVsc2Uge1xuICAgIHZpZFBsYXlpbmcgPSAxO1xuICAgIGF1ZGlvUGxheWluZyA9IDE7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0R3JheVwiO1xuICAgIGZvciAoaSA9IDA7IGk8IHRhZ3MubGVuZ3RoOyBpKyspeyBcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ3NbaV0pO1xuICAgICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgIH0gXG59XG4gICAgbXlBdWRpby5zcmMgPSBhdWRpb1thdWRpb1BsYXlpbmddO1xuICAgIG15QXVkaW8ucGxheSgpO1xuICAgIG15VmlkZW8uc3JjID12aWRzW3ZpZFBsYXlpbmddO1xufVxuXG5mdW5jdGlvbiBnZW9GaW5kTWUoKSB7XG5cbiAgICBsZXQgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpO1xuICAgIGxldCBsYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0Jyk7XG4gICAgbGV0IGxvbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9uZycpO1xuICBcbiAgICBmdW5jdGlvbiBzdWNjZXNzKHBvc2l0aW9uKSB7XG4gICAgICBsZXQgbGF0aXR1ZGUgID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICAgICAgbGV0IGxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XG4gIFxuICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gJyc7XG4gICAgICBsYXQuaHJlZiA9IGBodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy8jbWFwPTE4LyR7bGF0aXR1ZGV9LyR7bG9uZ2l0dWRlfWA7XG4gICAgICBsb25nLmhyZWYgPSBgaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvI21hcD0xOC8ke2xhdGl0dWRlfS8ke2xvbmdpdHVkZX1gO1xuICAgICAgbGF0LnRleHRDb250ZW50ID0gYExhdGl0dWRlOiBgICsgbGF0aXR1ZGUudG9GaXhlZCgyKSArYMKwYDtcbiAgICAgIGxvbmcudGV4dENvbnRlbnQgPSBgTG9uZ2l0dWRlOiBgICsgIGxvbmdpdHVkZS50b0ZpeGVkKDIpICtgwrBgO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9ICdVbmFibGUgdG8gcmV0cmlldmUgeW91ciBsb2NhdGlvbic7XG4gICAgfVxuICBcbiAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gJ0dlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gJ0xvY2F0aW5n4oCmJztcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2VzcywgZXJyb3IpO1xuICAgIH1cbiAgXG4gIH1cbiAgZ2VvRmluZE1lKCk7XG4gICJdfQ==
