// Fig. 11.5: CharacterProcessing.js 
// String methods charAt, charCodeAt, fromCharCode, 
// toLowercase and toUpperCase.
function start()
{
   var s = "ZEBRA";
   var s2 = "AbCdEfG";
   var result = "";
    
   result = "<p>Character at index 0 in '" + s + "' is " + 
      s.charAt( 0 ) + "</p>";
   result += "<p>Character code at index 0 in '" + s + "' is " + 
      s.charCodeAt( 0 ) + "</p>"; 
      
   result += "<p>'" + String.fromCharCode( 87, 79, 82, 68 ) + 
      "' contains character codes 87, 79, 82 and 68</p>";
      
   result += "<p>'" + s2 + "' in lowercase is '" + 
      s2.toLowerCase() + "'</p>";  
   result += "<p>'" + s2 + "' in uppercase is '" + 
      s2.toUpperCase() + "'</p>";    
   
   document.getElementById( "results" ).innerHTML = result;
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
