// Fig. 28.2: WelcomeSOAPXMLService.cs
// WCF web service that returns a welcome message using SOAP protocol and
// XML data format.
public class WelcomeSOAPXMLService : IWelcomeSOAPXMLService
{
   // returns a welcome message
   public string Welcome( string yourName )
   {
      return string.Format(
         "Welcome to WCF Web Services with SOAP and XML, {0}!", 
         yourName );
   } // end method Welcome
} // end class WelcomeSOAPXMLService

/**************************************************************************
 * (C) Copyright 1992-2009 by Deitel & Associates, Inc. and               *
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