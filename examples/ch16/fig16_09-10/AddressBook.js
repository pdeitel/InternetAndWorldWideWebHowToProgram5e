// Fig. 16.9 addressbook.js
// Ajax enabled address book JavaScript code
// URL of the web service
var webServiceUrl = "/AddressBookWebService/Service.svc";

var phoneValid = false; // indicates if the telephone is valid
var zipValid = false; //indicates if the zipcode is valid

// get a list of names from the server and display them
function showAddressBook()
{ 
   // hide the "addEntry" form and show the address book
   document.getElementById( "addEntry" ).style.display = "none";
   document.getElementById( "addressBook" ).style.display = "block";
   
   callWebService( "/getAllNames", parseData );              
} // end function showAddressBook

// send the asynchronous request to the web service
function callWebService( methodAndArguments, callBack )
{
   // build request URL string
   var requestUrl = webServiceUrl + methodAndArguments; 

   // attempt to send the asynchronous request
   try
   {
      var asyncRequest = new XMLHttpRequest(); // create request
   
      // set up callback function and store it
      asyncRequest.addEventListener("readystatechange",
         function() { callBack( asyncRequest ); }, false);

      // send the asynchronous request
      asyncRequest.open( "GET", requestUrl, true ); 
      asyncRequest.setRequestHeader("Accept", 
         "application/json; charset=utf-8" ); 
      asyncRequest.send(); // send request        
   } // end try
   catch ( exception ) 
   {
      alert ( "Request Failed" );
   } // end catch
} // end function callWebService

// parse JSON data and display it on the page
function parseData( asyncRequest )
{
   // if request has completed successfully process the response
   if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 )
   {  
      // convert the JSON string to an Object
      var data = JSON.parse(asyncRequest.responseText); 
      displayNames( data ); // display data on the page
   } // end if
} // end function parseData

// use the DOM to display the retrieved address book entries
function displayNames( data )
{
   // get the placeholder element from the page
   var listBox = document.getElementById( "Names" );
   listBox.innerHTML = ""; // clear the names on the page 

   // iterate over retrieved entries and display them on the page
   for ( var i = 0; i < data.length; ++i )
   {
      // dynamically create a div element for each entry
      // and a fieldset element to place it in
      var entry = document.createElement( "div" );
      var field = document.createElement( "fieldset" );
      entry.onclick = function() { getAddress( this, this.innerHTML ); };
      entry.id = i; // set the id
      entry.innerHTML = data[ i ].First + " " + data[ i ].Last;
      field.appendChild( entry ); // insert entry into the field
      listBox.appendChild( field ); // display the field
    } // end for
} // end function displayAll 

// search the address book for input
// and display the results on the page
function search( input )
{
   // get the placeholder element and delete its content
   var listBox = document.getElementById( "Names" );
   listBox.innerHTML = ""; // clear the display box

   // if no search string is specified all the names are displayed
   if ( input == "" ) // if no search value specified
   {
      showAddressBook(); // Load the entire address book
   } // end if
   else
   {
      callWebService( "/search/" + input, parseData );
   } // end else 
} // end function search

// Get address data for a specific entry
function getAddress( entry, name )
{
   // find the address in the JSON data using the element"s id
   // and display it on the page
   var firstLast = name.split(" "); // convert string to array
   var requestUrl = webServiceUrl + "/getAddress/" 
      + firstLast[ 0 ] + "/" + firstLast[ 1 ]; 

   // attempt to send an asynchronous request
   try
   {
      // create request object
      var asyncRequest = new XMLHttpRequest(); 
      
      // create a callback function with 2 parameters
      asyncRequest.addEventListener("readystatechange",
         function() { displayAddress( entry, asyncRequest ); }, false);

      asyncRequest.open( "GET", requestUrl, true ); 
      asyncRequest.setRequestHeader("Accept", 
         "application/json; charset=utf-8"); // set response datatype
      asyncRequest.send(); // send request              
   } // end try
   catch ( exception ) 
   {
      alert ( "Request Failed." );
   } // end catch        
} // end function getAddress

// clear the entry's data
function displayAddress( entry, asyncRequest )
{
   // if request has completed successfully, process the response
   if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 )
   {  
      // convert the JSON string to an object
      var data = JSON.parse(asyncRequest.responseText); 
      var name = entry.innerHTML // save the name string
      entry.innerHTML = name + "<br>" + data.Street +
         "<br>" + data.City + ", " + data.State
         + ", " + data.Zip + "<br>" + data.Telephone;

      // change event listener
      entry.onclick = function() { clearField( entry, name ); };
    } // end if
} // end function displayAddress

// clear the entry's data
function clearField( entry, name )
{
   entry.innerHTML = name; // set the entry to display only the name
   entry.onclick = function() { getAddress( entry, name ); };
} // end function clearField

// display the form that allows the user to enter more data
function addEntry()
{
   document.getElementById( "addressBook" ).style.display = "none";
   document.getElementById( "addEntry" ).style.display = "block";
} // end function addEntry

// send the zip code to be validated and to generate city and state
function validateZip( zip )
{  
   callWebService ( "/validateZip/" + zip, showCityState );
} // end function validateZip

// get city and state that were generated using the zip code
// and display them on the page
function showCityState( asyncRequest )
{
   // display message while request is being processed
   document.getElementById( "validateZip" ).
      innerHTML = "Checking zip...";          

   // if request has completed successfully, process the response
   if ( asyncRequest.readyState == 4 )
   {  
      if ( asyncRequest.status == 200 )
      {
         // convert the JSON string to an object
         var data = JSON.parse(asyncRequest.responseText); 

         // update zip code validity tracker and show city and state
         if ( data.Validity == "Valid" ) 
         {
            zipValid = true; // update validity tracker

            // display city and state
            document.getElementById( "validateZip" ).innerHTML = "";
            document.getElementById( "city" ).innerHTML = data.City;
            document.getElementById( "state" ).
               innerHTML = data.State;
         } // end if
         else
         {
            zipValid = false; // update validity tracker
            document.getElementById( "validateZip" ).
               innerHTML = data.ErrorText; // display the error

            // clear city and state values if they exist
            document.getElementById( "city" ).innerHTML = "";
            document.getElementById( "state" ).innerHTML = "";
         } // end else
      } // end if
      else if ( asyncRequest.status == 500 )
      {
         document.getElementById( "validateZip" ).
            innerHTML = "Zip validation service not avaliable";
      } // end else if
   } // end if
} // end function showCityState

// send the telephone number to the server to validate format
function validatePhone( phone )
{  
   callWebService( "/validateTel/" + phone, showPhoneError );
} // end function validatePhone

// show whether the telephone number has correct format
function showPhoneError( asyncRequest )
{ 
   // if request has completed successfully, process the response
   if ( asyncRequest.readyState == 4 && asyncRequest.status == 200 )
   {  
      // convert the JSON string to an object
      var data = JSON.parse(asyncRequest.responseText);
      
      if ( data.ErrorText != "Valid Telephone Format" )
      {
         phoneValid = false; // update validity tracker
         document.getElementById( "validatePhone" ).innerHTML = 
            data.ErrorText; // display the error
      } // end if
      else
      {
         phoneValid = true; // update validity tracker
      } // end else
    } // end if
} // end function showPhoneError

// enter the user's data into the database
function saveForm()
{  
   // retrieve the data from the form
   var first = document.getElementById( "first" ).value;
   var last = document.getElementById( "last" ).value;
   var street = document.getElementById( "street" ).value;
   var city = document.getElementById( "city" ).innerHTML;
   var state = document.getElementById( "state" ).innerHTML;
   var zip = document.getElementById( "zip" ).value;
   var phone = document.getElementById( "phone" ).value;
   
   // check if data is valid 
   if ( !zipValid || !phoneValid  )
   {
      // display error message
      document.getElementById( "success" ).innerHTML = 
         "Invalid data entered. Check form for more information";
   } // end if
   else if ( ( first == "" ) || ( last == "" ) )
   {
      // display error message
      document.getElementById( "success").innerHTML = 
         "First Name and Last Name must have a value.";
   } // end if
   else
   {
      // hide the form and show the addressbook
      document.getElementById( "addEntry" ).style.display = "none";
      document.getElementById( "addressBook" ).style.display = "block";

      // call the web service to insert data into the database
      callWebService( "/addEntry/" + first + "/" + last + "/" + street +
         "/" + city + "/" + state + "/" + zip + "/" + phone, parseData );
   } // end else
} // end function saveForm

// register event listeners
function start()
{
   document.getElementById( "addressBookButton" ).addEventListener(
      "click", showAddressBook, false );
   document.getElementById( "addEntryButton" ).addEventListener(
      "click", addEntry, false );
   document.getElementById( "searchInput" ).addEventListener(
      "keyup", function() { search( this.value ); } , false );
   document.getElementById( "zip" ).addEventListener(
      "blur", function() { validateZip( this.value ); } , false );
   document.getElementById( "phone" ).addEventListener(
      "blur", function() { validatePhone( this.value ); } , false );
   document.getElementById( "submitButton" ).addEventListener(
      "click", saveForm , false );

   showAddressBook();
} // end function start

window.addEventListener( "load", start, false );      



/*************************************************************************
* (C) Copyright 1992-2008 by Deitel & Associates, Inc. and               *
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