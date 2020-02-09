//05
let number ;
function makeTriangle(number = 2) {
  //number = 2;
  while (number <= 6) {
    console.log('#'.repeat(number));
    number++;
  }
}

makeTriangle(3);
makeTriangle(2);
makeTriangle(1);
