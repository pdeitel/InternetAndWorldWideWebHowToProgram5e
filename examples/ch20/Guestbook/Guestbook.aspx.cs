// Fig. 19.36: Guestbook.aspx.cs
// Code-behind file that defines event handlers for the guestbook.
using System;
using System.Collections.Specialized; // for class ListDictionary

public partial class Guestbook : System.Web.UI.Page
{
   // Submit Button adds a new guestbook entry to the database,
   // clears the form and displays the updated list of guestbook entries
   protected void submitButton_Click( object sender, EventArgs e )
   {
      // create dictionary of parameters for inserting
      ListDictionary insertParameters = new ListDictionary();

      // add current date and the user's name, e-mail address          
      // and message to dictionary of insert parameters                
      insertParameters.Add( "Date", DateTime.Now.ToShortDateString() );
      insertParameters.Add( "Name", nameTextBox.Text );
      insertParameters.Add( "Email", emailTextBox.Text );
      insertParameters.Add( "Message1", messageTextBox.Text );

      // execute an INSERT LINQ statement to add a new entry to the      
      // Messages table in the Guestbook data context that contains the  
      // current date and the user's name, e-mail address and message    
      messagesLinqDataSource.Insert( insertParameters );

      // clear the TextBoxes
      nameTextBox.Text = String.Empty;
      emailTextBox.Text = String.Empty;
      messageTextBox.Text = String.Empty;

      // update the GridView with the new database table contents
      messagesGridView.DataBind();
   } // submitButton_Click

   // Clear Button clears the Web Form's TextBoxes
   protected void clearButton_Click( object sender, EventArgs e )
   {
      nameTextBox.Text = String.Empty;
      emailTextBox.Text = String.Empty;
      messageTextBox.Text = String.Empty;
   } // clearButton_Click
} // end class Guestbook

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