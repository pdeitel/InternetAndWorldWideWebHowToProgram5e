// Fig. 28.14: IWelcomeRESTJSONService.cs
// WCF web service interface that returns a welcome message through REST
// architecture and JSON format.
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;

[ServiceContract]
public interface IWelcomeRESTJSONService
{
   // returns a welcome message
   [OperationContract]
   [WebGet( ResponseFormat = WebMessageFormat.Json,
      UriTemplate = "/welcome/{yourName}" )]
   TextMessage Welcome( string yourName );
} // end interface IWelcomeRESTJSONService

// class to encapsulate a string to send in JSON format
[DataContract]
public class TextMessage
{
   // automatic property message
   [DataMember]
   public string Message {get; set; }
} // end class TextMessage

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