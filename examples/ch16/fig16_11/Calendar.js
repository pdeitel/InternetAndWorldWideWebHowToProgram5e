// Fig. 15.11 Calendar.js
// Calendar application built with dojo. 

// specify all the required dojo scripts
dojo.require( "dojo.*" ); // use scripts from event package
//dojo.require( "dojo.event.*" ); // use scripts from event package
//dojo.require( "dojo.widget.*" ); // use scripts from widget package
//dojo.require( "dojo.dom.*" ); // use scripts from dom package
//dojo.require( "dojo.io.*" ); // use scripts from the io package

// configure calendar event handler
function connectEventHandler()
{
   var calendar = dojo.widget.byId( "calendar" ); // get calendar
   calendar.setDate( "2011-07-04" );
   dojo.event.connect( 
      calendar, "onValueChanged", "retrieveItems" );
} // end function connectEventHandler
 
// location of CalendarService web service 
var webServiceUrl = "/CalendarService/Service.svc";

// obtain scheduled events for the specified date
function retrieveItems( eventDate )
{
   // convert date object to string in yyyy-mm-dd format
   var date = dojo.date.toRfc3339( eventDate ).substring( 0, 10 );
   callWebService( "/getItemsByDate/" + date, displayItems );
} // end function retrieveItems

// call a specific web service asynchronously to get server data
function callWebService( methodAndArguments, callBack )
{
   // url for the asynchronous request
   var requestUrl = webServiceUrl + methodAndArguments; 

   // call asynchronous request using dojo.io.bind
   dojo.io.bind( { url: requestUrl, handler: callback, 
      accept: "application/json; charset=utf-8" } );
} // end function callWebService

// display the list of scheduled events on the page
function displayItems( type, data, event )
{
   if ( type == 'error' ) // if the request has failed
   {
      alert( 'Could not retrieve the event' ); // display error
   } // end if
   else
   {
      var placeholder = dojo.byId( "itemList" ); // get placeholder
      placeholder.innerHTML = ''; // clear placeholder
      var items = JSON.parse(data); // parse server data
      
      // check whether there are events;
      // if none then display message
      if ( items == "" ) 
      {
         placeholder.innerHTML = 'No events for this date.';
      }
      
      for ( var  i = 0; i < items.length; i++ )
      {
         // initialize item's container
         var item = document.createElement( "div" ); 
         item.id = items[ i ].id; // set DOM id to database id
         
         // obtain and paste the item's description
         var text = document.createElement( "div" );
         text.innerHTML =  items[i].description; 
         text.id = 'description' + item.id; 
         dojo.dom.insertAtIndex( text, item, 0 );

         // create and insert the placeholder for the edit button
         var buttonPlaceHolder = document.createElement( "div" );
         dojo.dom.insertAtIndex( buttonPlaceHolder, item, 1 );
         
         // create the edit button and paste it into the container
         var editButton = dojo.widget.
            createWidget( "Button", {}, buttonPlaceHolder );
         editButton.setCaption( "Edit" ); 
         dojo.event.connect( 
            editButton, 'buttonClick', handleEdit );
         
         // insert item container in the list of items container
         dojo.dom.insertAtIndex( item, placeholder, i );            
      } // end for  
   } // end else
} // end function displayItems

// send the asynchronous request to get content for editing and
// run the edit-in-place UI
function handleEdit( event )
{
   var id = event.currentTarget.parentNode.id; // retrieve id
   callWebService( "/getItemById/" + id, displayForEdit );
} // end function handleEdit

// set up the interface for editing an item
function displayForEdit(type, data, event)
{
   if ( type == 'error' ) // if the request has failed
   {
      alert( 'Could not retrieve the event' ); // display error
   }
   else
   {
      var item = JSON.parse(data); // parse the item
      var id = item.id; // set the id
      
      // create div elements to insert content         
      var editElement = document.createElement( 'div' ); 
      var buttonElement = document.createElement( 'div' );
      
      // hide the unedited content
      var oldItem = dojo.byId( id ); // get the original element
      oldItem.id = 'old' + oldItem.id; // change element's id
      oldItem.style.display = 'none'; // hide old element
      editElement.id = id; // change the "edit" container's id

      // create a textbox and insert it on the page
      var editArea = document.createElement( 'textarea' );
      editArea.id = 'edit' + id; // set textbox id
      editArea.innerHTML = item.description; // insert description
      dojo.dom.insertAtIndex( editArea, editElement, 0 );
     
      // create button placeholders and insert it on the page
      // these will be transformed into dojo widgets
      var saveElement = document.createElement( 'div' );
      var cancelElement = document.createElement( 'div' );
      dojo.dom.insertAtIndex( saveElement, buttonElement, 0 );
      dojo.dom.insertAtIndex( cancelElement, buttonElement, 1 );
      dojo.dom.insertAtIndex( buttonElement, editElement, 1 );
    
      // create "save" and "cancel" buttons
      var saveButton = 
         dojo.widget.createWidget( "Button", {}, saveElement );
      var cancelButton = 
         dojo.widget.createWidget( "Button", {}, cancelElement );
      saveButton.setCaption( "Save" ); // set saveButton label
      cancelButton.setCaption( "Cancel" ); // set cancelButton text
      
      // set up the event handlers for cancel and save buttons
      dojo.event.connect( saveButton, 'buttonClick', handleSave );
      dojo.event.connect( 
         cancelButton, 'buttonClick', handleCancel );

      // paste the edit UI on the page
      dojo.dom.insertAfter( editElement, oldItem );
   } // end else
} // end function displayForEdit

// sends the changed content to the server to be saved
function handleSave( event )
{
   // grab user entered data
   var id = event.currentTarget.parentNode.parentNode.id; 
   var descr = dojo.byId( 'edit' + id ).value;
   callWebService( "/save/" + id + "/" + descr, displayEdited );
} // end function handleSave

// restores the original content of the item
function handleCancel( event )
{
   var voidEdit = event.currentTarget.parentNode.parentNode;
   var id = voidEdit.id; // retrieve the id of the item
   dojo.dom.removeNode( voidEdit, true ); // remove the edit UI
   var old = dojo.byId( 'old' + id ); // retrieve pre-edit version
   old.style.display = 'block'; // show pre-edit version
   old.id = id; // reset the id
} // end function handleCancel

// displays the updated event information after an edit is saved
function displayEdited( type, data, event )
{
   if ( type == 'error' )
   {
      alert( 'Could not retrieve the event' );
   }
   else
   {
      editedItem = JSON.parse(data); // obtain updated description
      var id = editedItem.id; // obtain the id
      var editElement = dojo.byId( id ); // get the edit UI
      dojo.dom.removeNode( editElement, true ); // delete edit UI
      var old = dojo.byId( 'old' + id ); // get item container

      // get pre-edit element and update its description
      var oldText = dojo.byId( 'description' + id ); 
      oldText.innerHTML = editedItem.description; 

      old.id = id; // reset id
      old.style.display = 'block'; // show the updated item
   } // end else
} // end function displayEdited

// when the page is loaded, set up the calendar event handler
dojo.addOnLoad( connectEventHandler );  
	  
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