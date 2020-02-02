//06
var size = 8;
var space = "    ";
var chess = "#";

for ( let i = 1; i <= size; i++){
  var newline = "";

  for ( var y =1; y<= size; y++){
    if(i%2){ 
      if(y%2){ 
        newline=newline + space;
      }else{
        newline = newline + chess; 
      }
    }else{
      if(y%2){
        newline = newline + chess;
      }else{
        newline = newline + space;
      }
    }
  }
  console.log(newline);
}