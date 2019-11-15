// fibonacciworker.js
// JavaScript for a Worker that performs the 
// recursive Fibonacci calculation. 

// recursively calculate fibonacci of specified value
function fibonacci( number ) 
{
   if ( number === 0 || number === 1)
      return number;
   else
      return fibonacci( number - 1 ) + fibonacci( number - 2 );
} // end function fibonacci

addEventListener( "message", 
   function( e ) 
   { 
      postMessage( fibonacci( parseInt( e.data ) ) );
   }, 
   false );


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
*************************************************************************/