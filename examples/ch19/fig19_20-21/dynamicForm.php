<!DOCTYPE html>

<!-- Fig. 19.21: dynamicForm.php --> 
<!-- Dynamic form. -->
<html>
   <head>
      <meta charset = "utf-8">
      <title>Registration Form</title>
      <style type = "text/css">
         p       { margin: 0px; }
         .error  { color: red }
         p.head  { font-weight: bold; margin-top: 10px; }
         label   { width: 5em; float: left; }
      </style>
   </head>
   <body>
      <?php
         // variables used in script
         $fname = isset($_POST[ "fname" ]) ? $_POST[ "fname" ] : "";
         $lname = isset($_POST[ "lname" ]) ? $_POST[ "lname" ] : "";
         $email = isset($_POST[ "email" ]) ? $_POST[ "email" ] : "";
         $phone = isset($_POST[ "phone" ]) ? $_POST[ "phone" ] : "";
         $book = isset($_POST[ "book" ]) ? $_POST[ "book" ] : "";
         $os = isset($_POST[ "os" ]) ? $_POST[ "os" ] : "";
         $iserror = false;
         $formerrors = 
            array( "fnameerror" => false, "lnameerror" => false, 
               "emailerror" => false, "phoneerror" => false );

         // array of book titles
         $booklist = array( "Internet and WWW How to Program",
            "C++ How to Program", "Java How to Program",
            "Visual Basic How to Program" );

         // array of possible operating systems
         $systemlist = array( "Windows", "Mac OS X", "Linux", "Other" );

         // array of name values for the text input fields
         $inputlist = array( "fname" => "First Name",
            "lname" => "Last Name", "email" => "Email",
            "phone" => "Phone" );

         // ensure that all fields have been filled in correctly
         if ( isset( $_POST["submit"] ) )
         {
            if ( $fname == "" )                   
            {
               $formerrors[ "fnameerror" ] = true;
               $iserror = true;                   
            } // end if

            if ( $lname == "" ) 
            {
               $formerrors[ "lnameerror" ] = true;
               $iserror = true;
            } // end if

            if ( $email == "" ) 
            {
               $formerrors[ "emailerror" ] = true;
               $iserror = true;
            } // end if       

            if ( !preg_match( "/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/", 
               $phone ) ) 
            {
               $formerrors[ "phoneerror" ] = true;
               $iserror = true;
            } // end if
            
            if ( !$iserror )  
            {
               // build INSERT query
               $query = "INSERT INTO contacts " .
                  "( LastName, FirstName, Email, Phone, Book, OS ) " .
                  "VALUES ( '$lname', '$fname', '$email', " . 
                  "'" . mysql_real_escape_string( $phone ) . 
                  "', '$book', '$os' )";

               // Connect to MySQL
               if ( !( $database = mysql_connect( "localhost", 
                  "iw3htp", "password" ) ) )
                  die( "<p>Could not connect to database</p>" );

               // open MailingList database
               if ( !mysql_select_db( "MailingList", $database ) )
                  die( "<p>Could not open MailingList database</p>" );
             
               // execute query in MailingList database
               if ( !( $result = mysql_query( $query, $database ) ) ) 
               {
                  print( "<p>Could not execute query!</p>" );
                  die( mysql_error() );
               } // end if

               mysql_close( $database );

               print( "<p>Hi $fname. Thank you for completing the survey.
                     You have been added to the $book mailing list.</p>
                  <p class = 'head'>The following information has been 
                     saved in our database:</p>
                  <p>Name: $fname $lname</p>
                  <p>Email: $email</p>
                  <p>Phone: $phone</p>
                  <p>OS: $os</p>
                  <p><a href = 'formDatabase.php'>Click here to view 
                     entire database.</a></p>
                  <p class = 'head'>This is only a sample form.       
                     You have not been added to a mailing list.</p>
                  </body></html>" );
               die(); // finish the page
            } // end if 
         } // end if 

         print( "<h1>Sample Registration Form</h1>
            <p>Please fill in all fields and click Register.</p>" );

         if ( $iserror )                                              
         {                                                            
            print( "<p class = 'error'>Fields with * need to be filled 
               in properly.</p>" );
         } // end if

         print( "<!-- post form data to dynamicForm.php -->
            <form method = 'post' action = 'dynamicForm.php'>
            <h2>User Information</h2>

            <!-- create four text boxes for user input -->" );
         foreach ( $inputlist as $inputname => $inputalt )
         {
            print( "<div><label>$inputalt:</label><input type = 'text'
               name = '$inputname' value = '" . $$inputname . "'>" );
            
            if ( $formerrors[ ( $inputname )."error" ] == true ) 
               print( "<span class = 'error'>*</span>" );        
            
            print( "</div>" );
         } // end foreach

         if ( $formerrors[ "phoneerror" ] ) 
            print( "<p class = 'error'>Must be in the form 
               (555)555-5555" );
          
         print( "<h2>Publications</h2>
            <p>Which book would you like information about?</p>

            <!-- create drop-down list containing book names -->
            <select name = 'book'>" );
               
         foreach ( $booklist as $currbook ) 
         {
            print( "<option" . 
               ($currbook == $book ? " selected>" : ">") .
               $currbook . "</option>" );
         } // end foreach
                     
         print( "</select>
            <h2>Operating System</h2>
            <p>Which operating system do you use?</p>

            <!-- create five radio buttons -->" );

         $counter = 0;
        
         foreach ( $systemlist as $currsystem ) 
         {
            print( "<input type = 'radio' name = 'os' 
               value = '$currsystem' " );

            if ( ( !$os && $counter == 0 ) || ( $currsystem == $os ) )
               print( "checked" );

            print( ">$currsystem" );
            ++$counter;
         } // end foreach

         print( "<!-- create a submit button -->
            <p class = 'head'><input type = 'submit' name = 'submit'
            value = 'Register'></p></form></body></html>" );
   ?><!-- end PHP script -->

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
