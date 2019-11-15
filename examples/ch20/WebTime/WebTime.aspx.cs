// Fig. 19.20: WebTime.aspx.cs
// Code-behind file for a page that displays the current time.
using System;

public partial class WebTime : System.Web.UI.Page
{
   // initializes the contents of the page
   protected void Page_Init( object sender, EventArgs e )
   {
      // display the server's current time in timeLabel
      timeLabel.Text = DateTime.Now.ToString( "hh:mm:ss" );
   } // end method Page_Init
} // end class WebTime
 
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