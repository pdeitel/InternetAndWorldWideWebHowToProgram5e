// chat.js
// WebSocket chat server using Node.js with
// the "express" and "ws" modules.

// script requires "express" library to create an HTTP server
var express = require( "express" );
var webServer = express.createServer(); // create an HTTP server
console.log( "HTTP Server Created" ); // log message to console 

// specify the folder from which HTTP server loads static web pages
webServer.use( express.static( __dirname + "/public" ) );

// this Node.js script requires the "ws" library's 
// WebSocket Server implementation
var WSServer = require( "ws" ).Server;

// create the WebSocket server for webServer
var webSocketServer = new WSServer( { server: webServer } );
console.log( "WebSocket Server Created" );

// register webSocketServer's connection event handler
webSocketServer.on( "connection", 
   function( webSocket ) 
   {
      // create welcome message
      var welcomeMessage = "Connected! Welcome to our chat! ";

      if ( webSocketServer.clients.length == 1 )
         welcomeMessage += "You're the only person online.";
      else
         welcomeMessage += (webSocketServer.clients.length - 1) + 
            " other user(s) online.";

      // indicate that the client is now connected
      webSocket.send( JSON.stringify( 
         { name: "Server", message: welcomeMessage } ) );
      console.log( "New Client Connection Received" );

      // register message event handler for socket
      webSocket.on( "message", 
         function( receivedMessage ) 
         {
            // forward new message to all chat room clients
            sendToAllClients( receivedMessage );
         } // end message event handler
      ); // end call to webSocket's on function for message event

      // register close event handler for socket
      webSocket.on( "close", 
         function() 
         {
            // indicate number of clients remaining online
            var clientsRemaining;

            if ( webSocketServer.clients.length == 1 )
               clientsRemaining = JSON.stringify( { name: "Server", 
                  message: "You're the only person online." } );
            else
               clientsRemaining = JSON.stringify( { name: "Server", 
                  message: (webSocketServer.clients.length - 1) + 
                     " other user(s) online." } );

            // forward message to all chat room clients
            sendToAllClients( clientsRemaining );
            console.log( "A Client Connection Was Terminated" );
         } // end close event handler
      ); // end call to webSocket's on function for close event
   } // end connection event handler
); // end call webSocketServer's on function

// function that sends a message to all clients
function sendToAllClients( messageToSend )
{
   // send receivedMessage's data to all clients
   for ( var i = 0; i < webSocketServer.clients.length; ++i )
   {
      if ( webSocketServer.clients[i] )
         webSocketServer.clients[i].send( messageToSend );
   } // end for 
} // end function sendToAllClients

console.log( "Registered Connection Event Handler" );
webServer.listen(8080); // listen for WebSocket connections on port 8080
console.log( "Now Accepting WebSocket Connections on port 8080" );
console.log( "Type Ctrl + C to Terminate Server" );



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