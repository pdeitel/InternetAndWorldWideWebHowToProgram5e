// Fig. 15.33: xpath.html 
// JavaScript that uses XPath to locate nodes in an XML document. 
var doc; // variable to reference the XML document
var outputHTML = ""; // stores text to output in outputDiv

// register event handler for button and load XML document
function start()
{
   document.getElementById( "matchesButton" ).addEventListener( 
      "click", processXPathExpression, false );
   loadXMLDocument( "sports.xml" );
} // end function start

// load XML document programmatically
function loadXMLDocument( url )
{
   var xmlHttpRequest = new XMLHttpRequest();
   xmlHttpRequest.open( "get", url, false );
   xmlHttpRequest.send( null );
   doc = xmlHttpRequest.responseXML;
} // end function loadXMLDocument

// display the XML document 
function displayHTML()
{
   document.getElementById( "outputDiv" ).innerHTML = outputHTML;
} // end function displayDoc

// obtain and apply XPath expression
function processXPathExpression()
{
   var xpathExpression = document.getElementById( "inputField" ).value;
   var result;
   outputHTML = "";

   if ( !doc.evaluate ) // Internet Explorer 
   {
      result = doc.selectNodes( xpathExpression );

      for ( var i = 0; i < result.length; i++ )
      {
         outputHTML += "<p>" + result.item( i ).text + "</p>";
      } // end for
   } // end if
   else // other browsers
   {
      result = doc.evaluate( xpathExpression, doc, null, 
         XPathResult.ORDERED_NODE_ITERATOR_TYPE, null );
      var current = result.iterateNext();

      while ( current ) 
      {
         outputHTML += "<p>" + current.textContent + "</p>";
         current = result.iterateNext();
      } // end while
   } // end else

   displayHTML();
} // end function processXPathExpression

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
*************************************************************************/

