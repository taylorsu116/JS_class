//6. create a table and paint alternative colors:

let element = document.getElementById("dog");
element.style.color = 'salmon';
element.style.fontFamily = 'Courier New';
element.style.fontSize = "40";

let row = document.getElementsByTagName("tr");
for(let i = 0; i<row.length; i++){
    if(i%2){
        row[i].style.backgroundColor = 'salmon';
    }else{
        row[i].style.backgroundColor = 'gray';
        } 
    }
