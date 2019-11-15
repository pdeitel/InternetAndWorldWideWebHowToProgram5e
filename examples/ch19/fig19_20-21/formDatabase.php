<!DOCTYPE html>

<!-- Fig. 19.22: formDatabase.php -->
<!-- Displaying the MailingList database. -->
<html>
   <head>
      <meta charset = "utf-8">
      <title>Search Results</title>
      <style type = "text/css">
         table  { background-color: lightblue; 
                  border: 1px solid gray; 
                  border-collapse: collapse; }
         th, td { padding: 5px; border: 1px solid gray; }
         tr:nth-child(even) { background-color: white; }
         tr:first-child { background-color: lightgreen; }
      </style>
   </head>
   <body>
      <?php
         // build SELECT query
         $query = "SELECT * FROM contacts";
        
         // Connect to MySQL
         if ( !( $database = mysql_connect( "localhost",  
            "iw3htp", "password" ) ) )
            die( "<p>Could not connect to database</p></body></html>" );
   
         // open MailingList database
         if ( !mysql_select_db( "MailingList", $database ) )
            die( "<p>Could not open MailingList database</p>
               </body></html>" );

         // query MailingList database
         if ( !( $result = mysql_query( $query, $database ) ) ) 
         {
            print( "<p>Could not execute query!</p>" );
            die( mysql_error() . "</body></html>" );
         } // end if
      ?><!-- end PHP script -->

      <h1>Mailing List Contacts</h1>
      <table>
         <caption>Contacts stored in the database</caption>
         <tr>
            <th>ID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>E-mail Address</th>
            <th>Phone Number</th>
            <th>Book</th>
            <th>Operating System</th>
         </tr>
         <?php
            // fetch each record in result set
            for ( $counter = 0; $row = mysql_fetch_row( $result );
               ++$counter )
            {
               // build table to display results
               print( "<tr>" );

               foreach ( $row as $key => $value ) 
                  print( "<td>$value</td>" );

               print( "</tr>" );
            } // end for

            mysql_close( $database );
         ?><!-- end PHP script -->
      </table>
   </body>
</html>

<!--
**************************************************************************
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
**************************************************************************
-->