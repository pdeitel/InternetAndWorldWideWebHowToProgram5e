// chatclient.js
// JavaScript for WebSockets chat client.
var screenName; // input where user enters screen name
var connectButton; // button to connect to server
var disconnectButton; // button to disconnect from server
var messageListDiv; // div where message list is displayed
var messagesList; // ul element to which each message is added
var messageToSend; // textarea where user enters messages to send
var sendButton; // button to send a new message to the chat room
var socket; // the WebSocket used for communication with the server

// get HTML5 elements and register listeners
function init()
{
   // get HTML5 elements 
   screenName = document.getElementById( "screenName" );
   connectButton = document.getElementById( "connectButton" );
   disconnectButton = document.getElementById( "disconnectButton" );
   messageListDiv = document.getElementById( "messageListDiv" );
   messagesList = document.getElementById( "messagesList" );
   messageToSend = document.getElementById( "messageToSend" );
   sendButton = document.getElementById( "sendButton" );
  
   // register listener for connectButton's click event
   connectButton.addEventListener( "click", 
      function() 
      { 
         // create the WebSocket 
         socket = new WebSocket( "ws://" + document.location.host );
         
         // register WebSocket's open event listener
         socket.addEventListener( "open", 
            function()
            {  
               connectButton.disabled = true; // disable 
               disconnectButton.disabled = false; // enable 
               screenName.disabled = true; // disable

               // send connection message with name if 
               if ( socket && socket.readyState == WebSocket.OPEN )
               {
                  var messageToSend = 
                     JSON.stringify( { name: screenName.value, 
                        message: " joined the chat" } );
                  socket.send( messageToSend ); // send a message

                  // create new li element, set its innerHTML and display it
                  var newListItem = document.createElement( "li" );
                  newListItem.innerHTML = "You're now connected.";
                  messagesList.appendChild( newListItem );
                  scrollDiv(); // scroll to end of messageListDiv
               } // end if
            }, // end event handler function for WebSocket's open event
            false );

         // register close event listener
         socket.addEventListener( "message", 
            function( message )
            {  
               // parse the JSON object containing the message 
               var messageObject = JSON.parse( message.data );
    
               // create new li element, set innerHTML and display it
               var newListItem = document.createElement( "li" );
               newListItem.innerHTML = "<span class = 'screenName'>" + 
                  messageObject.name + ": </span>" + 
                  messageObject.message;
               messagesList.appendChild( newListItem );
               scrollDiv(); // scroll to end of messageListDiv
            }, // end event handler function for WebSocket's message event
            false );

         // register close event listener
         socket.addEventListener( "close", 
            function()
            {  
               connectButton.disabled = false; // enable 
               disconnectButton.disabled = true; // disable 
               screenName.disabled = false; // enable

               // create new li element, set its innerHTML and display it
               var newListItem = document.createElement( "li" );
               newListItem.innerHTML = "Connection closed. Good bye!";
               messagesList.appendChild( newListItem );
               scrollDiv(); // scroll to end of messageListDiv
            }, // end event handler function for WebSocket's close event
            false );
      }, // end event handler function for connectButton's click event
      false );

   // register listener for disconnectButton
   disconnectButton.addEventListener( "click", 
      function() 
      {
         // send connection message with name if 
         if ( socket && socket.readyState == WebSocket.OPEN )
         {
            var messageToSend = 
               JSON.stringify( { name: screenName.value, 
                  message: " left the chat room." } );
            socket.send( messageToSend ); // send a message
            socket.close(); // closes the WebSocket
         } // end if
      }, // end event handler function for disconnectButton's click event
      false );

   // register listener for sendButton
   sendButton.addEventListener( "click", 
      function() 
      {
         if ( socket && socket.readyState == WebSocket.OPEN )
         {
            // send connection message with name
            var messageObject = 
               JSON.stringify( { name: screenName.value, 
                  message: messageToSend.value } );
            messageToSend.value = ""; // clear the textarea
            socket.send( messageObject );
         } // end if
      }, // end event handler function for sendButton's click event
      false );
} // end function init

// function to scroll to end of div containing messages
function scrollDiv()
{
   messageListDiv.scrollTop = messageListDiv.scrollHeight;
} // end function scrollDiv

window.addEventListener( "load", init, false );



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