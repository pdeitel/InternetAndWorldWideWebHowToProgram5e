// Fig. 15.25: XMLDOMTraversal.html 
// Traversing an XML document using the XML DOM. 
var outputHTML = ""; // stores text to output in outputDiv
var idCounter = 1; // used to create div IDs
var depth = -1; // tree depth is -1 to start
var current = null; // represents the current node for traversals
var previous = null; // represent prior node in traversals

// register event handlers for buttons and load XML document
function start()
{
   document.getElementById( "firstChild" ).addEventListener( 
      "click", processFirstChild, false );
   document.getElementById( "nextSibling" ).addEventListener( 
      "click", processNextSibling, false );
   document.getElementById( "previousSibling" ).addEventListener( 
      "click", processPreviousSibling, false );
   document.getElementById( "lastChild" ).addEventListener( 
      "click", processLastChild, false );
   document.getElementById( "parentNode" ).addEventListener( 
      "click", processParentNode, false );
   loadXMLDocument( 'article.xml' )
} // end function start

// load XML document programmatically
function loadXMLDocument( url )
{
   var xmlHttpRequest = new XMLHttpRequest();
   xmlHttpRequest.open( "get", url, false );
   xmlHttpRequest.send( null );
   var doc = xmlHttpRequest.responseXML;
   buildHTML( doc.childNodes ); // display the nodes
   displayDoc(); // display the document and highlight current node
} // end function loadXMLDocument

// traverse xmlDocument and build HTML5 representation of its content
function buildHTML( childList )
{
   ++depth; // increase tab depth

   // display each node's content
   for ( var i = 0; i < childList.length; i++ ) 
   {
      switch ( childList[ i ].nodeType )
      {
         case 1: // Node.ELEMENT_NODE; value used for portability
            outputHTML += "<div id=\"id" + idCounter + "\">";
            spaceOutput( depth ); // insert spaces
            outputHTML += childList[ i ].nodeName; // show node's name
            ++idCounter; // increment the id counter

            // if current node has children, call buildHTML recursively
            if ( childList[ i ].childNodes.length != 0 )
               buildHTML( childList[ i ].childNodes );

            outputHTML += "</div>";
            break;
         case 3: // Node.TEXT_NODE; value used for portability
         case 8: // Node.COMMENT_NODE; value used for portability
            // if nodeValue is not 3 or 6 spaces (Firefox issue),
            // include nodeValue in HTML
            if ( childList[ i ].nodeValue.indexOf( "   " ) == -1 &&
               childList[ i ].nodeValue.indexOf( "      " ) == -1 )
            {
               outputHTML += "<div id=\"id" + idCounter + "\">";
               spaceOutput( depth ); // insert spaces
               outputHTML += childList[ i ].nodeValue + "</div>";
               ++idCounter; // increment the id counter
            } // end if
      } // end switch
   } // end for

   --depth; // decrease tab depth
} // end function buildHTML

// display the XML document and highlight the first child
function displayDoc()
{
   document.getElementById( "outputDiv" ).innerHTML = outputHTML;
   current = document.getElementById( "id1" ); 
   setCurrentNodeStyle( current.getAttribute( "id" ), true );
} // end function displayDoc

// insert non-breaking spaces for indentation
function spaceOutput( number )
{
   for ( var i = 0; i < number; i++ )
   {
      outputHTML += "&nbsp;&nbsp;&nbsp;";
   } // end for
} // end function spaceOutput

// highlight first child of current node
function processFirstChild()
{
   if ( current.childNodes.length == 1 && // only one child
      current.firstChild.nodeType == 3 )  // and it's a text node
   {
      alert( "There is no child node" );
   } // end if
   else if ( current.childNodes.length > 1 ) 
   {
      previous = current; // save currently highlighted node

      if ( current.firstChild.nodeType != 3 ) // if not text node
         current = current.firstChild; // get new current node
      else // if text node, use firstChild's nextSibling instead
         current = current.firstChild.nextSibling; // get first sibling

      setCurrentNodeStyle( previous.getAttribute( "id" ), false );
      setCurrentNodeStyle( current.getAttribute( "id" ), true ); 
   } // end if
   else 
      alert( "There is no child node" );
} // end function processFirstChild

// highlight next sibling of current node
function processNextSibling()
{
   if ( current.getAttribute( "id" ) != "outputDiv" 
      && current.nextSibling )
   {
      previous = current; // save currently highlighted node
      current = current.nextSibling; // get new current node
      setCurrentNodeStyle( previous.getAttribute( "id" ), false ); 
      setCurrentNodeStyle( current.getAttribute( "id" ), true ); 
   } // end if
   else 
      alert( "There is no next sibling" );
} // end function processNextSibling

// highlight previous sibling of current node if it is not a text node
function processPreviousSibling()
{
   if ( current.getAttribute( "id" ) != "outputDiv" && 
      current.previousSibling && current.previousSibling.nodeType != 3 )
   {
      previous = current; // save currently highlighted node
      current = current.previousSibling; // get new current node
      setCurrentNodeStyle( previous.getAttribute( "id" ), false );
      setCurrentNodeStyle( current.getAttribute( "id" ), true ); 
   } // end if
   else 
      alert( "There is no previous sibling" );
} // end function processPreviousSibling

// highlight last child of current node
function processLastChild()
{
   if ( current.childNodes.length == 1 && 
      current.lastChild.nodeType == 3 )
   {
      alert( "There is no child node" );
   } // end if
   else if ( current.childNodes.length != 0 ) 
   {
      previous = current; // save currently highlighted node
      current = current.lastChild; // get new current node
      setCurrentNodeStyle( previous.getAttribute( "id" ), false ); 
      setCurrentNodeStyle( current.getAttribute( "id" ), true );
   } // end if
   else 
      alert( "There is no child node" );
} // end function processLastChild

// highlight parent of current node
function processParentNode()
{
   if ( current.parentNode.getAttribute( "id" ) != "body" ) 
   {
      previous = current; // save currently highlighted node
      current = current.parentNode; // get new current node
      setCurrentNodeStyle( previous.getAttribute( "id" ), false ); 
      setCurrentNodeStyle( current.getAttribute( "id" ), true ); 
   } // end if
   else 
      alert( "There is no parent node" );
} // end function processParentNode

// set style of node with specified id
function setCurrentNodeStyle( id, highlight )
{
   document.getElementById( id ).className = 
      ( highlight ? "highlighted" : "" );
} // end function setCurrentNodeStyle

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