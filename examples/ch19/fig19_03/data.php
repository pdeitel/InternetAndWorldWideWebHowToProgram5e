<!DOCTYPE html>

<!-- Fig. 19.3: data.php -->
<!-- Data type conversion. -->
<html>
   <head>
      <meta charset = "utf-8">
      <title>Data type conversion</title>
      <style type = "text/css">
         p      { margin: 0; }
         .head  { margin-top: 10px; font-weight: bold; }
         .space { margin-top: 10px; }
      </style>
   </head>
   <body>
      <?php
         // declare a string, double and integer
         $testString = "3.5 seconds";
         $testDouble = 79.2;         
         $testInteger = 12;     
      ?><!-- end PHP script -->

      <!-- print each variable’s value and type -->    
      <p class = "head">Original values:</p>
      <?php 
         print( "<p>$testString is a(n) " . gettype( $testString ) 
            . "</p>" );
         print( "<p>$testDouble is a(n) " . gettype( $testDouble )
            . "</p>" );
         print( "<p>$testInteger is a(n) " . gettype( $testInteger ) 
            . "</p>" );
      ?><!-- end PHP script --> 
      <p class = "head">Converting to other data types:</p>
      <?php 
         // call function settype to convert variable
         // testString to different data types
         print( "<p>$testString " );           
         settype( $testString, "double" ); 
         print( " as a double is $testString</p>" );
         print( "<p>$testString " );
         settype( $testString, "integer" );
         print( " as an integer is $testString</p>" );
         settype( $testString, "string" ); 
         print( "<p class = 'space'>Converting back to a string results in 
            $testString</p>" );
                    
         // use type casting to cast variables to a different type  
         $data = "98.6 degrees";
         print( "<p class = 'space'>Before casting: $data is a " . 
            gettype( $data ) . "</p>" );
         print( "<p class = 'space'>Using type casting instead:</p>
            <p>as a double: " . (double) $data . "</p>" .   
            "<p>as an integer: " . (integer) $data . "</p>" );
         print( "<p class = 'space'>After casting: $data is a " . 
            gettype( $data ) . "</p>" );                                          
      ?><!-- end PHP script -->
   </body>
</html>

<!--
**************************************************************************
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
**************************************************************************
-->