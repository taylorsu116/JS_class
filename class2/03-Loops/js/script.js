//03
let rolled = Math.ceil( Math.random() * 6 );

while (rolled <=3){
  console.log('number is ' + rolled);
  rolled = Math.ceil( Math.random() * 6 );
}

if(rolled>3) { 
  console.log('woohoo');
}

