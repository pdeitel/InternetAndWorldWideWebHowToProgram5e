// Fig. 28.17: WelcomeRESTJSON.cs
// Client that consumes WelcomeRESTJSONService.
using System;
using System.IO;
using System.Net;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Windows.Forms;

namespace WelcomeRESTJSONClient
{
   public partial class WelcomeRESTJSON : Form
   {
      // object to invoke the WelcomeRESTJSONService
      private WebClient client = new WebClient();

      public WelcomeRESTJSON()
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
         // send request to WelcomeRESTJSONService
         client.DownloadStringAsync( new Uri(
            "http://localhost:49579/WelcomeRESTJSONService/Service.svc/"
            + "welcome/" + textBox.Text ) );
      } // end method submitButton_Click

      // process web service response
      private void client_DownloadStringCompleted(
         object sender, DownloadStringCompletedEventArgs e )
      {
         // check if any error occurred in retrieving service data
         if ( e.Error == null )
         {
            // deserialize response into a TextMessage object
            DataContractJsonSerializer JSONSerializer =
               new DataContractJsonSerializer( typeof( TextMessage ) );
            TextMessage message = 
               ( TextMessage ) JSONSerializer.ReadObject( new 
               MemoryStream( Encoding.Unicode.GetBytes( e.Result ) ) );

            // display Message text
            MessageBox.Show( message.Message, "Welcome" );
         } // end if
      } // end method client_DownloadStringCompleted
   } // end class WelcomeRESTJSON

   // TextMessage class representing a JSON object
   [Serializable]
   public class TextMessage
   {
      public string Message;
   } // end class TextMessage
} // end namespace WelcomeRESTJSONClient

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