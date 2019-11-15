// Fig. 28.8: WelcomeSOAPXML.cs
// Client that consumes WelcomeSOAPXMLService.
using System;
using System.Windows.Forms;

namespace WelcomeSOAPXMLClient
{
   public partial class WelcomeSOAPXML : Form
   {
      // declare a reference to web service
      private ServiceReference.WelcomeSOAPXMLServiceClient client;

      public WelcomeSOAPXML()
      {
         InitializeComponent();
         client = new ServiceReference.WelcomeSOAPXMLServiceClient();
      } // end constructor

      // creates welcome message from text input and web service
      private void submitButton_Click( object sender, EventArgs e )
      {
         MessageBox.Show( client.Welcome( textBox.Text ), "Welcome" );
      } // end method submitButton_Click
   } // end class WelcomeSOAPXML
} // end namespace WelcomeSOAPXMLClient

/**************************************************************************
 * (C) Copyright 1992-2009 by Deitel + Associates, Inc. and               *
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