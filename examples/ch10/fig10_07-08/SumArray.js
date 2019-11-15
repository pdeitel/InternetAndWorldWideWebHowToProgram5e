// Fig. 10.8: SumArray.js
// Summing the elements of an array with for and for...in
function start()
{
   var theArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
   var total1 = 0, total2 = 0;

   // iterates through the elements of the array in order and adds 
   // each element's value to total1
   var length = theArray.length; // get array's length once before loop

   for ( var i = 0; i < theArray.length; ++i ) 
   {
      total1 += theArray[ i ];                 
   } // end for

   var results = "<p>Total using indices: " + total1 + "</p>";

   // iterates through the elements of the array using a for... in
   // statement to add each element's value to total2
   for ( var element in theArray )  
   {
      total2 += theArray[ element ];
   } // end for

   results += "<p>Total using for...in: " + total2 + "</p>";
   document.getElementById( "output" ).innerHTML = results;
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