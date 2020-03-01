/* 
 * Class 6: Class Exercises
 */

  //2. Create a function that will accept a date or year and calculate if it falls on a Leap Year.
  let value = window.prompt("Please enter a year:");
  function LeapYear(){
    console.log("The year you choose is:" + value);
    if(value % 4 == 0) {
      console.log("It's a Leap Year!");
    } else if(value % 100 == 0 && value % 400 == 0){
      console.log("It's a Leap Year!");
    } else {
      console.log( "It's not a Leap Year.");
    }
  }

LeapYear();
  //3. Create a function that can perform a word count, given a block of text. Punctuations or special characters are not to be included.
  
  //4. Create a function that checks a string or sentence and returns true if that parameter is a palindrome, (the string is the same forward as it is backward).
  
  // 5. Create a para tag in html. Update the style of the first para tag to use a different font family, color and/or size.
  
  //6. create a table and paint alternative colors:
  /* 
  <table>
  <tr>
    <td>Cell 1:1</td>
    <td>Cell 2:1</td>
    <td>Cell 3:1</td>
    <td>Cell 4:1</td>
    <td>Cell 5:1</td>
  </tr>
  <tr>
    <td>Cell 1:2</td>
    <td>Cell 2:2</td>
    <td>Cell 3:2</td>
    <td>Cell 4:2</td>
    <td>Cell 5:2</td>
  </tr>
  <tr>
    <td>Cell 1:3</td>
    <td>Cell 2:3</td>
    <td>Cell 3:3</td>
    <td>Cell 4:3</td>
    <td>Cell 5:3</td>
  </tr>
  <tr>
    <td>Cell 1:4</td>
    <td>Cell 2:4</td>
    <td>Cell 3:4</td>
    <td>Cell 4:4</td>
    <td>Cell 5:4</td>
  </tr>
  <tr>
    <td>Cell 1:5</td>
    <td>Cell 2:5</td>
    <td>Cell 3:5</td>
    <td>Cell 4:5</td>
    <td>Cell 5:5</td>
  </tr>
  </table>
  */
  
  // 7. Write a script that, on click of a button, can randomly select an image from a list and insert it inside the section tag in the html. eg. https://source.unsplash.com/random
 