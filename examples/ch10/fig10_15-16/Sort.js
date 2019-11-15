// Fig. 10.16: Sort.js
// Sorting an array with sort.
function start()
{
   var a = [ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ];

   outputArray( "Data items in original order: ", a,
      document.getElementById( "originalArray" ) ); 
   a.sort( compareIntegers );  // sort the array
   outputArray( "Data items in ascending order: ", a,
      document.getElementById( "sortedArray" ) ); 
} // end function start

// output the heading followed by the contents of theArray
function outputArray( heading, theArray, output )
{
   output.innerHTML = heading + theArray.join( " " ); 
} // end function outputArray

// comparison function for use with sort
function compareIntegers( value1, value2 )        
{                                                 
   return parseInt( value1 ) - parseInt( value2 );
} // end function compareIntegers                                 

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