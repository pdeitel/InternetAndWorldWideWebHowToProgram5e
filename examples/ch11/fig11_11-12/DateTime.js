// Fig. 11.12: DateTime.js 
// Date and time methods of the Date object.
function start()
{
   var current = new Date();
            
   // string formatting methods and valueOf
   document.getElementById( "strings" ).innerHTML =
      "<p>toString: " + current.toString() + "</p>" +  
      "<p>toLocaleString: " + current.toLocaleString() + "</p>" + 
      "<p>toUTCString: " + current.toUTCString() + "</p>" + 
      "<p>valueOf: " + current.valueOf() + "</p>"; 
   
   // get methods
   document.getElementById( "getMethods" ).innerHTML =
      "<p>getDate: " + current.getDate() + "</p>" + 
      "<p>getDay: " + current.getDay() + "</p>" + 
      "<p>getMonth: " + current.getMonth() + "</p>" + 
      "<p>getFullYear: " + current.getFullYear() + "</p>" +   
      "<p>getTime: " + current.getTime() + "</p>" +   
      "<p>getHours: " + current.getHours() + "</p>" + 
      "<p>getMinutes: " + current.getMinutes() + "</p>" +     
      "<p>getSeconds: " + current.getSeconds() + "</p>" +   
      "<p>getMilliseconds: " + current.getMilliseconds() + "</p>" + 
      "<p>getTimezoneOffset: " + current.getTimezoneOffset() + "</p>";
        
   // creating a Date
   var anotherDate = new Date( 2011, 2, 18, 1, 5, 0, 0 );
   document.getElementById( "newArguments" ).innerHTML =
      "<p>Date: " + anotherDate + "</p>";
   
   // set methods
   anotherDate.setDate( 31 );      
   anotherDate.setMonth( 11 );     
   anotherDate.setFullYear( 2011 );
   anotherDate.setHours( 23 );     
   anotherDate.setMinutes( 59 );   
   anotherDate.setSeconds( 59 );   
   document.getElementById( "setMethods" ).innerHTML =
      "<p>Modified date: " + anotherDate + "</p>";
} // end function start

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