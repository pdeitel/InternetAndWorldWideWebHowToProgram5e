// Fig. 12.14: collections.js 
// Script to demonstrate using the links collection. 
function processLinks()
{
   var linksList = document.links; // get the document's links
   var contents = "<ul>";

   // concatenate each link to contents
   for ( var i = 0; i < linksList.length; ++i )
   {
      var currentLink = linksList[ i ];
      contents += "<li><a href='" + currentLink.href + "'>" + 
         currentLink.innerHTML + "</li>";
   } // end for

   contents += "</ul>";
   document.getElementById( "links" ).innerHTML = contents;
} // end function processLinks

window.addEventListener( "load", processLinks, false );

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