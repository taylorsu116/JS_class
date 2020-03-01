/* 
 * Class 6: Class Exercises
 */

 //3. Create a function that can perform a word count, given a block of text. Punctuations or special characters are not to be included.
 let my_quote = "Dogs are the best!"
 function wordCount(string){
  return string.split(" ").length;
 }
 console.log("There are " + wordCount(my_quote) + " words in this sentence." );