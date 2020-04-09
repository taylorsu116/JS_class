

let nytapi = 'https://api.nytimes.com/svc/archive/v1/2019/12.json?api-key=EsRo1aFI0m0QMX4su1FczTSuXyQzPREG';
let search ='NY';
let gifapi = 'https://api.giphy.com/v1/gifs/search?api_key=ewf4zZN9CliGK0eGOLL5FESw09eg7q0p&q='+search+'&limit=25&offset=0&rating=G&lang=en';
let note;
//lines being drawn
let lineX = 0;
let lineY = 0;
let lineZ = 0;
let xoff = 0.0;
let array;
//nyt article
let titles =[];
let date = [];
let articlenum=0;
var para;
var node;
var node2;
var articles;
setInterval(increment,0);

// form input
// let input=document.getElementById("search");
// let button=document.getElementById("submit").addEventListener("click",searching);

//get article headline and publish date from NYT api

function increment(){
    articlenum++;
    if(articlenum == titles.length){
        articlenum=0;
    }
}
function limit(){
    if(articlenum == titles.length){
    articlenum=0;
    console.log(titles.length);
}
console.log(limit);

fetch(nytapi)
.then(function(response){
    return response.json();
})
.then(function(resp){
    articles = resp.data.response.docs;
    for (let k = 0; k < 5; k++){
        titles[k] = articles[k].headline.main;
        date[k] = articles[k].pub_date;
        console.log("this" + title[0]);
        console.log("this" + date[0]);   
    } 
})
    // para = document.createElement("p");
    // node = document.createTextNode(title[articlenum]);
    // node2 = document.createTextNode(date[articlenum]);
    // para.appendChild(node);
    // para.appendChild(node2);

.catch(function(resp) {      
    console.log("There was an error: "+resp); 
    });
}

//get search value from user
function searching(){
    search = input.value;
    console.log(search);
  }

fetch(gifapi)
.then(function(response){
    return response.json();
})
.then(function(resp){
    array = resp.data[1].images.original.url;//second item looks better;;;
    console.log("this" + array);
    var img = new Image();
    img.src = array;
    document.getElementById("gif").appendChild(img);
})
.catch(function(resp) {      
    console.log("There was an error: "+resp); 
});






