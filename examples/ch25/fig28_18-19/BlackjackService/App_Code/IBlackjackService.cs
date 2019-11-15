// Fig. 28.18: IBlackjackService.cs
// Blackjack game WCF web service interface.
using System.ServiceModel;

[ServiceContract( SessionMode = SessionMode.Required )]
public interface IBlackjackService
{
   // deals a card that has not been dealt
   [OperationContract]
   string DealCard();

   // creates and shuffle the deck
   [OperationContract]
   void Shuffle();

   // calculates value of a hand
   [OperationContract]
   int GetHandValue( string dealt );
} // end interface IBlackjackService

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