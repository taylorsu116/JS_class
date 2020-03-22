var button = document.getElementById("submit");
button.addEventListener("click", searchGIF());
var input = document.getElementById("search");
var search = 'dog';

console.log(search);

function searchGIF(){
  search = 'dog';
  console.log(search);
  var url = 'https://api.giphy.com/v1/gifs/search?api_key=ewf4zZN9CliGK0eGOLL5FESw09eg7q0p&q='+search+'&limit=25&offset=0&rating=G&lang=en'
  fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(resp) {
      document.getElementById("Output").innerHTML = JSON.stringify(resp.results);
      buildSwissData( resp.results );
  })
  .catch(function(error) {
    document.getElementById("Output").innerHTML = "There was an error "+error;
});
}

function gotData(giphy){

  console.log(giphy.data[0].images.original.url)
    var img = document.createElement(giphy.data[0].images.original.url);
    document.getElementById("img").appendChild(img);
  
  }
