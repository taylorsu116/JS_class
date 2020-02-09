//04

const my_quote = "Dogs are the best!";

function findMAtch( my_quote, pattern) {
    var str = my_quote.indexOf(pattern);
    console.log("this is" + str);
    if(str == -1){
        return 'No';
    }else{
        return 'Yes';
    }
}

console.log(findMAtch ( my_quote, 'Dogs'));