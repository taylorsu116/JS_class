/* 
 * Class 6: Class Exercises
 */

// 1. Create a simple function that can reverse the contents of a sentence, word, phrase.
function reverse1(my_quote) {
    var splitString = my_quote.split("");
    var reverseArray = splitString.reverse();
    var joinArray =reverseArray.join();
    return joinArray;
  }
  
  console.log(reverse1("Dogs are the best!"));

 