// Fig. 28.9: IWelcomeRESTXMLService.cs
// WCF web service interface. A class that implements this interface
// returns a welcome message through REST architecture and XML data format
using System.ServiceModel;
using System.ServiceModel.Web;

[ServiceContract]
public interface IWelcomeRESTXMLService
{
   // returns a welcome message
   [OperationContract]
   [WebGet( UriTemplate = "/welcome/{yourName}" )]
   string Welcome( string yourName );
} // end interface IWelcomeRESTXMLService

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