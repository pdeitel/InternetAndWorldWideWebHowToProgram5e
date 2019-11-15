// Fig. 10.12: RandomPicture2.js
// Random image selection using arrays
var iconImg; 
var pictures = [ "CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO" ];
var descriptions = [ "Common Programming Error", 
   "Error-Prevention Tip", "Good Programming Practice", 
   "Look-and-Feel Observation", "Performance Tip", "Portability Tip", 
   "Software Engineering Observation" ];

// pick a random image and corresponding description then modify
// the img element in the document's body 
function pickImage()
{
   var index = Math.floor( Math.random() * 7 );
   iconImg.setAttribute( "src", pictures[ index ] + ".png" );
   iconImg.setAttribute( "alt", descriptions[ index ] );
} // end function pickImage

// registers iconImg's click event handler
function start()
{
   iconImg = document.getElementById( "image" );
   iconImg.addEventListener( "click", pickImage, false );
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
**************************************************************************/