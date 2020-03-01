// 7. Write a script that, on click of a button, 
//can randomly select an image from a list 
//and insert it inside the section tag in the html. 
//eg. https://source.unsplash.com/random


function imgSearch(){

    var src = 'https://source.unsplash.com/random' ;
    var img = document.createElement('img');

    img.src =src;
    document.body.appendChild(img);
}