// Fig. 28.24: ReservationClient.aspx.cs
// ReservationClient code behind file.
using System;

public partial class ReservationClient : System.Web.UI.Page
{
   // object of proxy type used to connect to ReservationService
   private ServiceReference.ReservationServiceClient ticketAgent =
      new ServiceReference.ReservationServiceClient();

   // attempt to reserve the selected type of seat
   protected void reserveButton_Click( object sender, EventArgs e )
   {
      // if the ticket is reserved
      if ( ticketAgent.Reserve( seatList.SelectedItem.Text,
         classList.SelectedItem.Text ) )
      {
         // hide other controls
         instructionsLabel.Visible = false;
         seatList.Visible = false;
         classList.Visible = false;
         reserveButton.Visible = false;
         errorLabel.Visible = false;

         // display message indicating success
         Response.Write( "Your reservation has been made. Thank you." );
      } // end if
      else // service method returned false, so signal failure
      {
         // display message in the initially blank errorLabel
         errorLabel.Text = "This type of seat is not available. " +
            "Please modify your request and try again.";
      } // end else
   } // end method reserveButton_Click   
} // end class ReservationClient

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
 **************************************************************************/