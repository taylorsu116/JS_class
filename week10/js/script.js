const canvas = document.getElementById("canvas1");
let context = canvas.getContext("2d");

//set default
context.backgroundColor = "Azure";
context.fillStyle = "CadetBlue";
context.strokeSyle = "white";
context.linWidth = 3;

//data
var data = [
    {name: "USA", count: 675243, color: "CadetBlue"},
    {name: "Spain", count: 185309, color: "RoyalBlue"},
    {name: "Japan", count: 9167, color: "Salmon"},
    {name: "Korea", count: 10635, color: "Gold"},
    {name: "Taiwan", count: 395, color: "LightSeaGreen"}
  ];
  
//bar
for (i = 0; i < data.length; i++) {
    context.fillStyle = data[i].color;
    context.fillRect(130, 60+i*120, data[i].count/500, 20);   
  }
//country
context.fillStyle = "black";
context.font = " 28px Helvetica";
for (i = 0; i < data.length; i++) {
    context.fillText(data[i].name, 30, 80+i*120);
  }
//cases
context.fillStyle = "#4d4d4d";
context.font = " 18px Helvetica";
for (i = 0; i < data.length; i++) {
    context.fillText("Total Cases  " + data[i].count, 30, 110+i*120);
  }