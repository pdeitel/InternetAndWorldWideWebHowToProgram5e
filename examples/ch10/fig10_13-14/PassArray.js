// Fig. 10.14: PassArray.js 
// Passing arrays and individual array elements to functions. 
function start()
{
   var a = [ 1, 2, 3, 4, 5 ];
   
   // passing entire array
   outputArray( "Original array: ", a, 
      document.getElementById( "originalArray" ) );
   modifyArray( a );  // array a passed by reference
   outputArray( "Modified array: ", a, 
      document.getElementById( "modifiedArray" ) );

   // passing individual array element
   document.getElementById( "originalElement" ).innerHTML =
      "a[3] before modifyElement: " + a[ 3 ];
   modifyElement( a[ 3 ] ); // array element a[3] passed by value
   document.getElementById( "modifiedElement" ).innerHTML =
      "a[3] after modifyElement: " + a[ 3 ];
} // end function start()

// outputs heading followed by the contents of "theArray"
function outputArray( heading, theArray, output )
{
   output.innerHTML = heading + theArray.join( " " );   
} // end function outputArray

// function that modifies the elements of an array
function modifyArray( theArray )
{
   for ( var j in theArray )
   {
      theArray[ j ] *= 2;   
   } // end for
} // end function modifyArray

// function that modifies the value passed   
function modifyElement( e )
{
   e *= 2; // scales element e only for the duration of the function
   document.getElementById( "inModifyElement" ).innerHTML = 
      "Value in modifyElement: " + e;
} // end function modifyElement   

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

