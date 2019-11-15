// Fig. 28.13: WelcomeRESTXML.cs
// Client that consumes the WelcomeRESTXMLService.
using System;
using System.Net;
using System.Windows.Forms;
using System.Xml.Linq;

namespace WelcomeRESTXMLClient
{
   public partial class WelcomeRESTXML : Form
   {
      // object to invoke the WelcomeRESTXMLService
      private WebClient client = new WebClient();

      private XNamespace xmlNamespace = XNamespace.Get( 
         "http://schemas.microsoft.com/2003/10/Serialization/" );

      public WelcomeRESTXML()
      {
         InitializeComponent();

         // add DownloadStringCompleted event handler to WebClient
         client.DownloadStringCompleted += 
            new DownloadStringCompletedEventHandler(
            client_DownloadStringCompleted );
      } // end constructor

      // get user input and pass it to the web service
      private void submitButton_Click( object sender, EventArgs e )
      {
         // send request to WelcomeRESTXMLService
         client.DownloadStringAsync( new Uri(
            "http://localhost:49429/WelcomeRESTXMLService/Service.svc/" +
            "welcome/" + textBox.Text ) );
      } // end method submitButton_Click

      // process web service response
      private void client_DownloadStringCompleted(
         object sender, DownloadStringCompletedEventArgs e )
      {
         // check if any error occurred in retrieving service data
         if ( e.Error == null )
         {
            // parse the returned XML string (e.Result)
            XDocument xmlResponse = XDocument.Parse( e.Result );

            // get the <string> element's value
            MessageBox.Show( xmlResponse.Element(
               xmlNamespace + "string" ).Value, "Welcome" );
         } // end if
      } // end method client_DownloadStringCompleted
   } // end class WelcomeRESTXML
} // end namespace WelcomeRESTXMLClient 

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