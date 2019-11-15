// Fig 14.7: mouseoverout.js 
// Events mouseover and mouseout. 
image1 = new Image();
image1.src = "heading1.png";
image2 = new Image();
image2.src = "heading2.png";

function mouseOver( e )
{  
   // swap the image when the mouse moves over it
   if ( e.target.getAttribute( "id" ) == "heading" )
   {
      e.target.setAttribute( "src", image2.getAttribute( "src" ) );
   } // end if
    
   // if the element is an li, assign its id to its color
   // to change the hex code's text to the corresponding color
   if ( e.target.tagName.toLowerCase() == "li" )
   {
      e.target.setAttribute( "style", 
         "color: " + e.target.getAttribute( "id" ) );
   } // end if
} // end function mouseOver

function mouseOut( e )
{
   // put the original image back when the mouse moves away
   if ( e.target.getAttribute( "id" ) == "heading" )
   {
      e.target.setAttribute( "src", image1.getAttribute( "src" ) );
   } // end if

   // if the element is an li, assign its id to innerHTML
   // to display the color name
   if ( e.target.tagName.toLowerCase() == "li" )
   {
      e.target.innerHTML = e.target.getAttribute( "id" );
   } // end if
} // end function mouseOut

document.addEventListener( "mouseover", mouseOver, false );
document.addEventListener( "mouseout", mouseOut, false );

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