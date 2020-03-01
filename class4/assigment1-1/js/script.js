//01

function Dicee(sides) {
const dice = {
  sides : sides,
  roll: function() {
   return Math.ceil(Math.random()*sides);
   }
  }
return dice;
}
const DiceA = new Dicee(12);
console.log(DiceA.roll());

// const DiceB = new Dicee(20);
// console.log(DiceB.roll());