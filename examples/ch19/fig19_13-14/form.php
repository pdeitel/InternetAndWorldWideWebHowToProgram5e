<!DOCTYPE html>

<!-- Fig. 19.14: form.php -->
<!-- Process information sent from form.html. -->
<html>
   <head>
      <meta charset = "utf-8">
      <title>Form Validation</title>
      <style type = "text/css">
         p       { margin: 0px; }
         .error  { color: red }
         p.head  { font-weight: bold; margin-top: 10px; }
      </style>
   </head>
   <body>
      <?php
         // determine whether phone number is valid and print
         // an error message if not
         if (!preg_match( "/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/", 
            $_POST["phone"]))
         {
            print( "<p class = 'error'>Invalid phone number</p>
               <p>A valid phone number must be in the form 
               (555) 555-5555</p><p>Click the Back button, 
               enter a valid phone number and resubmit.</p>
               <p>Thank You.</p></body></html>" );
            die(); // terminate script execution
         }
      ?><!-- end PHP script -->
      <p>Hi <?php print( $_POST["fname"] ); ?>. Thank you for 
         completing the survey. You have been added to the 
         <?php print( $_POST["book"] ); ?> mailing list.</p>
      <p class = "head">The following information has been saved 
         in our database:</p>
      <p>Name: <?php print( $_POST["fname"] ); 
         print( $_POST["lname"] ); ?></p>
      <p>Email: <?php print( $_POST["email"] ); ?></p>
      <p>Phone: <?php print( $_POST["phone"] ); ?></p>
      <p>OS: <?php print( $_POST["os"] ); ?></p>
      <p class = "head">This is only a sample form.       
         You have not been added to a mailing list.</p>   
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