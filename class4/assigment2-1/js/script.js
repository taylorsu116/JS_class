//02
//in array form:
let questions = prompt("what is your question?") ;

const qs =[
    ["how are you", "not bad"],
    ["what is your name", "Migu"],
    ["why are you here", "to make a living just like you"]
];


findMatch(questions);

function findMatch(pattern) { 
    for(let i = 0; i<qs.length; i++){
        if (qs[i][0].search(pattern)!=-1){
            console.log("You asked: "+qs[i][0]);
            alert(qs[i][1]);
        }
    }
}

