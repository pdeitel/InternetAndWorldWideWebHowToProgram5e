`// Fig. 19.26: Validation.aspx.cs
// Code-behind file for the form demonstrating validation controls.
using System;

public partial class Validation : System.Web.UI.Page
{
   // Page_Load event handler executes when the page is loaded
   protected void Page_Load( object sender, EventArgs e )
   {
      // if this is not the first time the page is loading
      // (i.e., the user has already submitted form data)
      if ( IsPostBack )
      {
         Validate(); // validate the form

         // if the form is valid
         if ( IsValid )
         {
            // retrieve the values submitted by the user
            string name = nameTextBox.Text;
            string email = emailTextBox.Text;
            string phone = phoneTextBox.Text;

            // show the the submitted values
            outputLabel.Text = "Thank you for your submission<br/>" +
               "We received the following information:<br/>";
            outputLabel.Text +=
               String.Format( "Name: {0}{1}E-mail: {2}{1}Phone: {3}",
                  name, "<br/>", email, phone);
            outputLabel.Visible = true; // display the output message
         } // end if
      } // end if
   } // end method Page_Load
} // end class Validation

 
/**************************************************************************
 * (C) Copyright 1992-2011 by Deitel & Associates, Inc. and               *
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