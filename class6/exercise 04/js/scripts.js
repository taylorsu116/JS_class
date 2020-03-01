//4. Create a function that checks a string or sentence and returns true if that parameter is a palindrome, (the string is the same forward as it is backward).
let my_quote1 = "Dogs are Dogs";
let my_quote2 = "mom"

function reverse1(my_quote) {
  var splitString = my_quote.split("");
  console.log(splitString);
  var reverseArray = splitString.reverse();
  var joinArray =reverseArray.join();
  return joinArray;
}

function checkPalindrome(){
      if(reverse1(my_quote2) == my_quote2.split("")){
    console.log("True!");
    return true;
      } else{
        console.log("Faulse");
      }
    }
  checkPalindrome();
