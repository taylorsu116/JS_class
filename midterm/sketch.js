var url = 'https://api.nytimes.com/svc/archive/v1/2019/12.json?api-key=EsRo1aFI0m0QMX4su1FczTSuXyQzPREG';
var lineX = 0;
var lineY = 0;
var lineZ = 0;
var titles =[];
var date = [];
var articlenum=0;
let xoff = 0.0;

var input;

function preload(){
    loadJSON(url, nytData);
}

function setup() {
  createCanvas(windowWidth-20,520);
  setInterval(increment,0);
  noiseSeed(99);
  stroke(0,5); 

  var button = select('#submit');
  button.mousePressed(searching);
  input = select('#search');
  search ='NY';
  var api = 'https://api.giphy.com/v1/gifs/search?api_key=ewf4zZN9CliGK0eGOLL5FESw09eg7q0p&q='+search+'&limit=25&offset=0&rating=G&lang=en'
  loadJSON(api,gotData)
  console.log(search);
}

function searching(){
    search = input.value();
    console.log(search);
    var api = 'https://api.giphy.com/v1/gifs/search?api_key=ewf4zZN9CliGK0eGOLL5FESw09eg7q0p&q='+search+'&limit=25&offset=0&rating=G&lang=en'
    loadJSON(api,gotData);
  }

function nytData(data){
  var articles = data.response.docs;

  for (let k = 0; k < 5000; k++){
    titles[k] = articles[k].headline.main;
    date[k] = articles[k].pub_date;
    }
  }

  function draw() {
    background(255);
    
    xoff = xoff + 0.005
    let n = noise(xoff)*width;

    fill(50);
    rect(10,10,windowWidth-40,500);
    stroke(255);
    strokeWeight(0.5);
    line(lineX, 0, lineX, height/6);
    strokeWeight(1.5);
    line(lineX-n, 0, lineX-n, height/6);
    strokeWeight(0.75);
    line(lineX+n, 0, lineX+n, height/6);
    strokeWeight(1);
    line(n+100, 0, n+100, height/6);
    lineX = lineX + 1;
    if (lineX > width) {
        lineX = 0;
    }
    stroke(255);
    strokeWeight(0.6);
    line(n, 0, n, height/6);
    strokeWeight(0.3);
    line(lineY-n, 0, lineY-n, height/6);
    strokeWeight(0.4);
    line(lineY, 0, lineY, height/6);
    strokeWeight(0.2);
    line(lineY+n/2, 0, lineY+n/2, height/6);
    strokeWeight(0.6);
    line(n+10, 0, n+10, height/6);
    lineY = lineY + 0.5;
    if (lineY > width) {
        lineY = 0;
    }
    stroke(255);
    strokeWeight(0.5);
    line(lineZ, 0, lineZ, height/6);
    strokeWeight(0.5);
    line(lineZ+n/10, 0, lineZ+n/10, height/6);
    lineZ = lineZ + 2;
    if (lineZ > width) {
        lineZ = 0; 
    }
    stroke(255);
    strokeWeight(0.5);
    line(n/2+400, 0, n/2+400, height/6);

    fill(255);
    noStroke();
    textFont('Times New Roman')
    textStyle(NORMAL);
    textSize(25);
    textAlign(LEFT);
    text('New York Times -',45,200);

    fill(255);
    noStroke();
    textFont('Times New Roman')
    textStyle(BOLD);
    textSize(45);
    textAlign(LEFT);
    text(titles[articlenum],45,250);

    textSize(18);
    textFont('Courier New')
    textStyle(NORMAL);
    textAlign(LEFT);
    text(date[articlenum],45,300);

    textSize(18);
    textFont('Courier New')
    textStyle(BOLD);
    textAlign(RIGHT);
    text('These are the article titles',1600,400);
    text('from New York Times Archive',1600,420);
    text('in December, 2019',1600,440);
    
    filter(INVERT);
   }

   function increment(){
    articlenum++;
    if(articlenum == titles.length){
        articlenum=0;
    }
   }
   function limit(){
       if(articlenum == titles.length){
           articlenum=0;
       }
   }

function gotData(giphy){

console.log(giphy.data[1].images.original.url)
createImg(giphy.data[1].images.original.url);
  
}