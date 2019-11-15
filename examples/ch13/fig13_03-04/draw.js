// Fig. 13.4: draw.js 
// A simple drawing program. 
 //initialization function to insert cells into the table
function createCanvas()
{
   var side = 100;
   var tbody = document.getElementById( "tablebody" );
  
   for ( var i = 0; i < side; ++i )
   {
      var row = document.createElement( "tr" );
       
      for ( var j = 0; j < side; ++j )
      {
         var cell = document.createElement( "td" );
         row.appendChild( cell );
      } // end for

      tbody.appendChild( row );
   } // end for

   // register mousemove listener for the table
   document.getElementById( "canvas" ).addEventListener( 
      "mousemove", processMouseMove, false );
} // end function createCanvas

// processes the onmousemove event
function processMouseMove( e )
{        
   if ( e.target.tagName.toLowerCase() == "td" )
   {
      // turn the cell blue if the Ctrl key is pressed
      if ( e.ctrlKey )
      {
         e.target.setAttribute( "class", "blue" );
      } // end if

      // turn the cell red if the Shift key is pressed
      if ( e.shiftKey )
      {
         e.target.setAttribute( "class", "red" );
      } // end if
   } // end if
} // end function processMouseMove

window.addEventListener( "load", createCanvas, false );

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