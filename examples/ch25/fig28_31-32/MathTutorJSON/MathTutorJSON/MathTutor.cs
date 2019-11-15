// Fig. 23.33: MathTutor.cs
// Math tutor using EquationGeneratorServiceJSON to create equations.
using System;
using System.IO;
using System.Net;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Windows.Forms;

namespace MathTutorJSON
{
   public partial class MathTutor : Form
   {
      private string operation = "add"; // the default operation
      private int level = 1; // the default difficulty level
      private Equation currentEquation;  // represents the Equation

      // object used to invoke service
      private WebClient service = new WebClient();

      public MathTutor()
      {
         InitializeComponent();

         // add DownloadStringCompleted event handler to WebClient
         service.DownloadStringCompleted +=
            new DownloadStringCompletedEventHandler(
               service_DownloadStringCompleted );
      } // end constructor

      // generates new equation when user clicks button
      private void generateButton_Click( object sender, EventArgs e )
      {
         // send request to EquationGeneratorServiceJSON
         service.DownloadStringAsync( new Uri(
            "http://localhost:50278/EquationGeneratorServiceJSON" +
            "/Service.svc/equation/" + operation + "/" + level ) );
      } // end method generateButton_Click

      // process web service response
      private void service_DownloadStringCompleted(
         object sender, DownloadStringCompletedEventArgs e )
      {
         // check if any errors occurred in retrieving service data
         if ( e.Error == null )
         {
            // deserialize response into an Equation object
            DataContractJsonSerializer JSONSerializer =
               new DataContractJsonSerializer( typeof( Equation ) );
            currentEquation = 
               ( Equation ) JSONSerializer.ReadObject( new 
               MemoryStream( Encoding.Unicode.GetBytes( e.Result ) ) );

            // display left side of equation
            questionLabel.Text = currentEquation.LeftHandSide;
            okButton.Enabled = true; // enable okButton
            answerTextBox.Enabled = true; // enable answerTextBox
         } // end if
      } // end method client_DownloadStringCompleted

      // check user's answer
      private void okButton_Click( object sender, EventArgs e )
      {
         if ( !string.IsNullOrEmpty( answerTextBox.Text ) )
         {
            // determine whether user's answer is correct
            if ( currentEquation.Result == 
               Convert.ToInt32( answerTextBox.Text ) )
            {
               questionLabel.Text = string.Empty; // clear question
               answerTextBox.Clear(); // clear answer
               okButton.Enabled = false; // disable OK button
               MessageBox.Show( "Correct! Good job!", "Result" );
            } // end if
            else
            {
               MessageBox.Show( "Incorrect. Try again.", "Result" );
            } // end else
         } // end if
      } // end method okButton_Click

      // set the operation to addition
      private void additionRadioButton_CheckedChanged( object sender,
         EventArgs e )
      {
         if ( additionRadioButton.Checked )
            operation = "add";
      } // end method additionRadioButton_CheckedChanged

      // set the operation to subtraction
      private void subtractionRadioButton_CheckedChanged( object sender,
         EventArgs e )
      {
         if ( subtractionRadioButton.Checked )
            operation = "subtract";
      } // end method subtractionRadioButton_CheckedChanged

      // set the operation to multiplication
      private void multiplicationRadioButton_CheckedChanged(
         object sender, EventArgs e )
      {
         if ( multiplicationRadioButton.Checked )
            operation = "multiply";
      } // end method multiplicationRadioButton_CheckedChanged

      // set difficulty level to 1
      private void levelOneRadioButton_CheckedChanged( object sender,
         EventArgs e )
      {
         if ( levelOneRadioButton.Checked )
            level = 1;
      } // end method levelOneRadioButton_CheckedChanged

      // set difficulty level to 2
      private void levelTwoRadioButton_CheckedChanged( object sender,
         EventArgs e )
      {
         if ( levelTwoRadioButton.Checked )
            level = 2;
      } // end method levelTwoRadioButton_CheckedChanged

      // set difficulty level to 3
      private void levelThreeRadioButton_CheckedChanged( object sender,
         EventArgs e )
      {
         if ( levelThreeRadioButton.Checked )
            level = 3;
      } // end method levelThreeRadioButton_CheckedChanged
   } // end class MathTutor
} // end namespace MathTutorJSON

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