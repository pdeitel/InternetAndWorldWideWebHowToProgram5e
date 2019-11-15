<!DOCTYPE html>

<!-- Fig. 19.7: arrays.php -->
<!-- Array manipulation. -->
<html>
   <head>
      <meta charset = "utf-8">
      <title>Array manipulation</title>
     <style type = "text/css">
        p    { margin: 0; }
       .head { margin-top: 10px; font-weight: bold; }
     </style>
   </head>
   <body>
      <?php
         // create array first
         print( "<p class = 'head'>Creating the first array</p>" );
         $first[ 0 ] = "zero";
         $first[ 1 ] = "one";
         $first[ 2 ] = "two";
         $first[] = "three";  
 
         // print each element’s index and value
         for ( $i = 0; $i < count( $first ); ++$i ) 
            print( "Element $i is $first[$i]</p>" );
   
         print( "<p class = 'head'>Creating the second array</p>" );

         // call function array to create array second 
         $second = array( "zero", "one", "two", "three" );

         for ( $i = 0; $i < count( $second ); ++$i ) 
            print( "Element $i is $second[$i]</p>" );
   
         print( "<p class = 'head'>Creating the third array</p>" );

         // assign values to entries using nonnumeric indices 
         $third[ "Amy" ] = 21;
         $third[ "Bob" ] = 18;
         $third[ "Carol" ] = 23;

         // iterate through the array elements and print each 
         // element’s name and value
         for ( reset( $third ); $element = key( $third ); next( $third ) )
            print( "<p>$element is $third[$element]</p>" );
   
         print( "<p class = 'head'>Creating the fourth array</p>" );

         // call function array to create array fourth using
         // string indices
         $fourth = array(  
            "January"   => "first",   "February" => "second",
            "March"     => "third",   "April"    => "fourth",
            "May"       => "fifth",   "June"     => "sixth",
            "July"      => "seventh", "August"   => "eighth",
            "September" => "ninth",   "October"  => "tenth",
            "November"  => "eleventh","December" => "twelfth" );

         // print each element’s name and value
         foreach ( $fourth as $element => $value )
            print( "<p>$element is the $value month</p>" );
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
