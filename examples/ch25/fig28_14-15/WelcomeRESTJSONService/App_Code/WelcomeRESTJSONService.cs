// Fig. 28.15: WelcomeRESTJSONService.cs
// WCF web service that returns a welcome message through REST
// architecture and JSON format.
public class WelcomeRESTJSONService : IWelcomeRESTJSONService
{
   // returns a welcome message
   public TextMessage Welcome( string yourName )
   {
      // add welcome message to field of TextMessage object
      TextMessage message = new TextMessage();
      message.Message = string.Format( 
         "Welcome to WCF Web Services with REST and JSON, {0}!", 
         yourName );
      return message;
   } // end method Welcome
} // end class WelcomeRESTJSONService

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