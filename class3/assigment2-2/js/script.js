//04

const my_quote = "Dogs are the best!";

function findMatch( my_quote, pattern, change) {
    var str = my_quote.indexOf(pattern);       
    console.log("this is " + pattern);
    
    if(str == -1){
        return 'No';
    }else{
        function change(){
            console.log(pattern.replace(pattern, pattern.toUpperCase()));
        }
        change();
    }
}

console.log(findMatch ( my_quote, 'Dog'));