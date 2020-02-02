//07
var s //should I go to school?;
var w //how to go to school?;

s = prompt("should I go to school? Y/N");

if(s === 'Y'){
//walk or subway?
w = prompt("Should I take subway? Y/N");
  if ( w === 'Y'){
  //take subway, arrive at school
  console.log('Action: Arrived at school by metro!');
  }else{
  //walk
  console.log('Action: Walk to school! Good luck!');
  }
}else{ //don't go to school
console.log('Action: Go back to sleep!')
}