// Fig. 10.18: search.js 
// Search an array with indexOf. 
var a = new Array( 100 );  // create an array

// fill array with even integer values from 0 to 198
for ( var i = 0; i < a.length; ++i ) 
{
   a[ i ] = 2 * i;                  
} // end for

// function called when "Search" button is pressed
function buttonPressed()
{
   // get the input text field
   var inputVal = document.getElementById( "inputVal" );

   // get the result paragraph
   var result = document.getElementById( "result" );

   // get the search key from the input text field the perform the search
   var searchKey = parseInt( inputVal.value );
   var element = a.indexOf( searchKey );

   if ( element != -1 )
   {
      result.innerHTML = "Found value in element " + element;
   } // end if
   else
   {
      result.innerHTML = "Value not found";
   } // end else
} // end function buttonPressed

// register searchButton's click event handler
function start()
{
   var searchButton = document.getElementById( "searchButton" );
   searchButton.addEventListener( "click", buttonPressed, false );
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