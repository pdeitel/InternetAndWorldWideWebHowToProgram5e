// Fig. 23.21: BlackjackService.cs
// Blackjack game WCF web service.
using System;
using System.Collections.Generic;
using System.ServiceModel;

[ServiceBehavior( InstanceContextMode = InstanceContextMode.PerSession )]
public class BlackjackService : IBlackjackService
{
   // create persistent session deck of cards object
   List< string > deck = new List< string >();

   // deals card that has not yet been dealt
   public string DealCard()
   {
      string card = deck[ 0 ]; // get first card
      deck.RemoveAt( 0 ); // remove card from deck
      return card;
   } // end method DealCard

   // creates and shuffles a deck of cards
   public void Shuffle()
   {
      Random randomObject = new Random(); // generates random numbers

      deck.Clear(); // clears deck for new game

      // generate all possible cards
      for ( int face = 1; face <= 13; face++ ) // loop through faces
         for ( int suit = 0; suit <= 3; suit++ ) // loop through suits
            deck.Add( face + " " + suit ); // add card (string) to deck

      // shuffles deck by swapping each card with another card randomly
      for ( int i = 0; i < deck.Count; i++ )
      {
         // get random index
         int newIndex = randomObject.Next( deck.Count - 1 );

         // save current card in temporary variable
         string temporary = deck[ i ];
         deck[ i ] = deck[ newIndex ]; // copy randomly selected card

         // copy current card back into deck
         deck[ newIndex ] = temporary; 
      } // end for
   } // end method Shuffle

   // computes value of hand
   public int GetHandValue( string dealt )
   {
      // split string containing all cards
      string[] cards = dealt.Split( '\t' ); // get array of cards
      int total = 0; // total value of cards in hand
      int face; // face of the current card
      int aceCount = 0; // number of aces in hand

      // loop through the cards in the hand
      foreach ( var card in cards )
      {
         // get face of card
         face = Convert.ToInt32( 
            card.Substring( 0, card.IndexOf( ' ' ) ) );

         switch ( face )
         {
            case 1: // if ace, increment aceCount
               ++aceCount;
               break;
            case 11: // if jack add 10
            case 12: // if queen add 10
            case 13: // if king add 10
               total += 10;
               break;
            default: // otherwise, add value of face 
               total += face;
               break;
         } // end switch
      } // end foreach

      // if there are any aces, calculate optimum total
      if ( aceCount > 0 )
      {
         // if it is possible to count one ace as 11, and the rest
         // as 1 each, do so; otherwise, count all aces as 1 each
         if ( total + 11 + aceCount - 1 <= 21 )
            total += 11 + aceCount - 1;
         else
            total += aceCount;
      } // end if

      return total;
   } // end method GetHandValue
} // end class BlackjackService

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