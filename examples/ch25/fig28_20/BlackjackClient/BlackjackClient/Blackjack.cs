// Fig. 28.20: Blackjack.cs
// Blackjack game that uses the BlackjackService web service.
using System;
using System.Drawing;
using System.Windows.Forms;
using System.Collections.Generic;
using System.Resources;

namespace BlackjackClient
{
   public partial class Blackjack : Form
   {
      // reference to web service
      private ServiceReference.BlackjackServiceClient dealer;

      // string representing the dealer's cards
      private string dealersCards;

      // string representing the player's cards
      private string playersCards;

      // list of PictureBoxes for card images
      private List< PictureBox > cardBoxes;
      private int currentPlayerCard; // player's current card number
      private int currentDealerCard; // dealer's current card number

      private ResourceManager pictureLibrary =
         BlackjackClient.Properties.Resources.ResourceManager;

      // enum representing the possible game outcomes 
      public enum GameStatus
      {
         PUSH, // game ends in a tie
         LOSE, // player loses
         WIN, // player wins
         BLACKJACK // player has blackjack
      } // end enum GameStatus

      public Blackjack()
      {
         InitializeComponent();
      } // end constructor

      // sets up the game
      private void Blackjack_Load( object sender, EventArgs e )
      {
         // instantiate object allowing communication with web service
         dealer = new ServiceReference.BlackjackServiceClient();

         // put PictureBoxes into cardBoxes List
         cardBoxes = new List<PictureBox>(); // create list
         cardBoxes.Add( pictureBox1 );
         cardBoxes.Add( pictureBox2 );
         cardBoxes.Add( pictureBox3 );
         cardBoxes.Add( pictureBox4 );
         cardBoxes.Add( pictureBox5 );
         cardBoxes.Add( pictureBox6 );
         cardBoxes.Add( pictureBox7 );
         cardBoxes.Add( pictureBox8 );
         cardBoxes.Add( pictureBox9 );
         cardBoxes.Add( pictureBox10 );
         cardBoxes.Add( pictureBox11 );
         cardBoxes.Add( pictureBox12 );
         cardBoxes.Add( pictureBox13 );
         cardBoxes.Add( pictureBox14 );
         cardBoxes.Add( pictureBox15 );
         cardBoxes.Add( pictureBox16 );
         cardBoxes.Add( pictureBox17 );
         cardBoxes.Add( pictureBox18 );
         cardBoxes.Add( pictureBox19 );
         cardBoxes.Add( pictureBox20 );
         cardBoxes.Add( pictureBox21 );
         cardBoxes.Add( pictureBox22 );
      } // end method Blackjack_Load

      // deals cards to dealer while dealer's total is less than 17, 
      // then computes value of each hand and determines winner
      private void DealerPlay()
      {
         // reveal dealer's second card
         string[] cards = dealersCards.Split( '\t' );
         DisplayCard( 1, cards[1] );

         string nextCard;

         // while value of dealer's hand is below 17,
         // dealer must take cards
         while ( dealer.GetHandValue( dealersCards ) < 17 )
         {
            nextCard = dealer.DealCard(); // deal new card
            dealersCards += '\t' + nextCard; // add new card to hand

            // update GUI to show new card
            MessageBox.Show( "Dealer takes a card" );
            DisplayCard( currentDealerCard, nextCard );
            ++currentDealerCard;
         } // end while

         int dealersTotal = dealer.GetHandValue( dealersCards );
         int playersTotal = dealer.GetHandValue( playersCards );

         // if dealer busted, player wins
         if ( dealersTotal > 21 )
         {
            GameOver( GameStatus.WIN );
         } // end if
         else
         {
            // if dealer and player have not exceeded 21,
            // higher score wins; equal scores is a push.
            if ( dealersTotal > playersTotal ) // player loses game
               GameOver( GameStatus.LOSE );
            else if ( playersTotal > dealersTotal ) // player wins game
               GameOver( GameStatus.WIN );
            else // player and dealer tie
               GameOver( GameStatus.PUSH );
         } // end else
      } // end method DealerPlay

      // displays card represented by cardValue in specified PictureBox
      public void DisplayCard( int card, string cardValue )
      {
         // retrieve appropriate PictureBox
         PictureBox displayBox = cardBoxes[ card ];

         // if string representing card is empty,
         // set displayBox to display back of card
         if ( string.IsNullOrEmpty( cardValue ) )
         {
            displayBox.Image = 
               ( Image ) pictureLibrary.GetObject( "cardback" );
            return;
         } // end if

         // retrieve face value of card from cardValue
         string face =
            cardValue.Substring( 0, cardValue.IndexOf( ' ' ) );

         // retrieve the suit of the card from cardValue
         string suit =
            cardValue.Substring( cardValue.IndexOf( ' ' ) + 1 );

         char suitLetter; // suit letter used to form image file name

         // determine the suit letter of the card
         switch ( Convert.ToInt32( suit ) )
         {
            case 0: // clubs
               suitLetter = 'c';
               break;
            case 1: // diamonds
               suitLetter = 'd';
               break;
            case 2: // hearts
               suitLetter = 'h';
               break;
            default: // spades 
               suitLetter = 's';
               break;
         } // end switch

         // set displayBox to display appropriate image
         displayBox.Image = ( Image ) pictureLibrary.GetObject(
            "_" + face + suitLetter );
      } // end method DisplayCard

      // displays all player cards and shows 
      // appropriate game status message
      public void GameOver( GameStatus winner )
      {
         string[] cards = dealersCards.Split( '\t' );

         // display all the dealer's cards
         for ( int i = 0; i < cards.Length; i++ )
            DisplayCard( i, cards[ i ] );

         // display appropriate status image
         if ( winner == GameStatus.PUSH ) // push
            statusPictureBox.Image = 
               ( Image ) pictureLibrary.GetObject( "tie" );
         else if ( winner == GameStatus.LOSE ) // player loses
            statusPictureBox.Image =
               ( Image ) pictureLibrary.GetObject( "lose" );
         else if ( winner == GameStatus.BLACKJACK )
            // player has blackjack
            statusPictureBox.Image =
               ( Image ) pictureLibrary.GetObject( "blackjack" );
         else // player wins
            statusPictureBox.Image =
               ( Image ) pictureLibrary.GetObject( "win" );

         // display final totals for dealer and player
         dealerTotalLabel.Text =
            "Dealer: " + dealer.GetHandValue( dealersCards );
         playerTotalLabel.Text =
            "Player: " + dealer.GetHandValue( playersCards );

         // reset controls for new game
         stayButton.Enabled = false;
         hitButton.Enabled = false;
         dealButton.Enabled = true;
      } // end method GameOver

      // deal two cards each to dealer and player
      private void dealButton_Click( object sender, EventArgs e )
      {
         string card; // stores a card temporarily until added to a hand

         // clear card images
         foreach ( PictureBox cardImage in cardBoxes )
            cardImage.Image = null;

         statusPictureBox.Image = null; // clear status image
         dealerTotalLabel.Text = string.Empty; // clear dealer total
         playerTotalLabel.Text = string.Empty; // clear player total

         // create a new, shuffled deck on the web service host
         dealer.Shuffle();

         // deal two cards to player
         playersCards = dealer.DealCard(); // deal first card to player
         DisplayCard( 11, playersCards ); // display card
         card = dealer.DealCard(); // deal second card to player
         DisplayCard( 12, card ); // update GUI to display new card
         playersCards += '\t' + card; // add second card to player's hand

         // deal two cards to dealer, only display face of first card
         dealersCards = dealer.DealCard(); // deal first card to dealer
         DisplayCard( 0, dealersCards ); // display card
         card = dealer.DealCard(); // deal second card to dealer
         DisplayCard( 1, string.Empty ); // display card face down
         dealersCards += '\t' + card; // add second card to dealer's hand

         stayButton.Enabled = true; // allow player to stay
         hitButton.Enabled = true; // allow player to hit
         dealButton.Enabled = false; // disable Deal Button

         // determine the value of the two hands
         int dealersTotal = dealer.GetHandValue( dealersCards );
         int playersTotal = dealer.GetHandValue( playersCards );

         // if hands equal 21, it is a push
         if ( dealersTotal == playersTotal && dealersTotal == 21 )
            GameOver( GameStatus.PUSH );
         else if ( dealersTotal == 21 ) // if dealer has 21, dealer wins
            GameOver( GameStatus.LOSE );
         else if ( playersTotal == 21 ) // player has blackjack
            GameOver( GameStatus.BLACKJACK );

         // next dealer card has index 2 in cardBoxes
         currentDealerCard = 2;

         // next player card has index 13 in cardBoxes
         currentPlayerCard = 13;
      } // end method dealButton

      // deal another card to player
      private void hitButton_Click( object sender, EventArgs e )
      {
         string card = dealer.DealCard(); // deal new card
         playersCards += '\t' + card; // add new card to player's hand

         DisplayCard( currentPlayerCard, card ); // display card
         ++currentPlayerCard;

         // determine the value of the player's hand
         int total = dealer.GetHandValue( playersCards );

         // if player exceeds 21, house wins
         if ( total > 21 )
            GameOver( GameStatus.LOSE );
         else if ( total == 21 ) // if player has 21, dealer's turn
         {
            hitButton.Enabled = false;
            DealerPlay();
         } // end if
      } // end method hitButton_Click

      // play the dealer's hand after the player chooses to stay
      private void stayButton_Click( object sender, EventArgs e )
      {
         stayButton.Enabled = false; // disable Stay Button
         hitButton.Enabled = false; // disable Hit Button
         dealButton.Enabled = true; // enable Deal Button
         DealerPlay(); // player chose to stay, so play the dealer's hand
      } // end method stayButton_Click
   } // end class Blackjack
} // end namespace BlackjackClient

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