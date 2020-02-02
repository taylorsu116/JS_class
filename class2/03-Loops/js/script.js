//03
let rolled = Math.ceil( Math.random() * 6 );

while (rolled <=3){
  rolled = Math.ceil( Math.random() * 6 );
  console.log('number is ' + rolled);
}

if(rolled>3) { 
  console.log('woohoo');
}

