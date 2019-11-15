// Fig. 11.9: SplitAndSubString.js
// String object methods split and substring.
function splitButtonPressed()
{  
   var inputString = document.getElementById( "inputField" ).value;
   var tokens = inputString.split( " " ); 
   
   var results = document.getElementById( "results" );
   results.innerHTML = "<p>The sentence split into words is: </p>" + 
      "<p class = 'indent'>" + 
      tokens.join( "</p><p class = 'indent'>" ) + "</p>" + 
      "<p>The first 10 characters of the input string are: </p>" + 
      "<p class = 'indent'>'" + inputString.substring( 0, 10 ) + "'</p>";
} // end function splitButtonPressed

// register click event handler for searchButton
function start()
{
   var splitButton = document.getElementById( "splitButton" );
   splitButton.addEventListener( "click", splitButtonPressed, false );
} // end function start

window.addEventListener( "load", start, false );


/*************************************************************************
* (C) Copyright 1992-2012 by Deitel & Associates, Inc. and               *
* Pearson Education, Inc. All Rights Reserved.                           *
*                                                                        *
* DISCLAIMER: The authors and publisher of this book have used their     *
* best efforts in preparing the book. These efforts include the          *
* development, research, and testing of the theories and programs        *
* to determine their effectiveness. The authors and publisher make       *
* no warranty of any kind, expressed or implied, with regard to these    *
* programs or to the documentation contained in these books. The authors *
* and publisher shall not be liable in any event for incidental or       *
* consequential damages in connection with, or arising out of, the       *
* furnishing, performance, or use of these programs.                     *
**************************************************************************/