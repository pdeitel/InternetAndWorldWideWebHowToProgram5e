// fibonacci.js
// JavaScript for fibonacci.html. 
var recursiveFibonacciResult; // displays recursive result
var getSpecificFibonacciButton; // initiates recursive calculation
var nextFibonacciResult; // displays nonrecursive result
var computeValue; // value entered by user for recursive calculation
var n1 = 0; // initialized with first Fibonacci number
var n2 = 1; // initialized with second Fibonacci number
var fibonacciCounter = 0; // current Fibonacci number to display
var worker; // represents the Web Worker that performs the calculation

// get elements and register listeners
function init()
{
   // get elements for displaying results
   recursiveFibonacciResult = 
      document.getElementById( "recursiveFibonacciResult" );
   nextFibonacciResult = 
      document.getElementById( "nextFibonacciResult" );
  
   // get element in which user enters Fibonacci number to calculate
   computeValue = document.getElementById( "computeValue" );

   // register listener for getSpecificFibonacciButton
   getSpecificFibonacciButton = 
      document.getElementById( "getSpecificFibonacciButton" );
   getSpecificFibonacciButton.addEventListener( 
      "click", calculateFibonacciRecursively, false );

   // register listener for cancelButton
   cancelButton = document.getElementById( "cancelButton" );
   cancelButton.addEventListener( "click", 
      function() 
      {
         if ( worker != null ) 
         {
            worker.terminate(); // terminates the Worker
            recursiveFibonacciResult.innerHTML = ""; 
            getSpecificFibonacciButton.disabled = false; 
            worker = null;
         } // end if
      }, 
      false );

   // register listener for getNextFibonacciButton
   var getNextFibonacciButton = 
      document.getElementById( "getNextFibonacciButton" );
   getNextFibonacciButton.addEventListener( 
      "click", nextFibonacciValue, false );
} // end function init

// calculate and display Fibonacci recursively
function calculateFibonacciRecursively()
{
   getSpecificFibonacciButton.disabled = true; 
   recursiveFibonacciResult.innerHTML = "Calculating ...";
   
   // create a new Worker to execute code in fibonacciworker.js
   if ( worker == null )
   {
      worker = new Worker( "fibonacciworker.js" );
      worker.addEventListener( "message", 
         function( e ) 
         { 
            recursiveFibonacciResult.innerHTML = "Fibonacci of " + 
               computeValue.value + " is " + e.data;
            getSpecificFibonacciButton.disabled = false; 
         }, 
         false );
   } // end if

   worker.postMessage( computeValue.value ); // start the Worker   
} // end function calculateFibonacciRecursively

// calculate and display next Fibonacci value 
function nextFibonacciValue()
{
   var tempResult; // store calculation result 
   
   // determine Fibonacci value
   if ( fibonacciCounter === 0 )
      tempResult = 0;
   else if ( fibonacciCounter === 1 )
      tempResult = 1;
   else
   {
      tempResult = n1 + n2; // calculates next Fibonacci value
      n1 = n2
      n2 = tempResult;
   } // end else

   // display next Fibonacci value
   nextFibonacciResult.innerHTML = "Fibonacci of " + fibonacciCounter +
      " is " + tempResult;
   ++fibonacciCounter; 
} // end function nextFibonacciValue

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