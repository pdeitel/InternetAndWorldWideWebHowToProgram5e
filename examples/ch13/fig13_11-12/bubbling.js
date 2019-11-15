// Fig. 13.12: bubbling.js
// Canceling event bubbling. 
function documentClick() 
{
   alert( "You clicked in the document." );  
} // end function documentClick

function bubble( e )
{
   alert( "This will bubble." );
   e.cancelBubble = false;
} // end function bubble

function noBubble( e )
{
   alert( "This will not bubble." );
   e.cancelBubble = true;
} // end function noBubble

function registerEvents()
{
   document.addEventListener( "click", documentClick, false );                        
   document.getElementById( "bubble" ).addEventListener( 
      "click", bubble, false );    
   document.getElementById( "noBubble" ).addEventListener( 
      "click", noBubble, false );    
} // end function registerEvents

window.addEventListener( "load", registerEvents, false );

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