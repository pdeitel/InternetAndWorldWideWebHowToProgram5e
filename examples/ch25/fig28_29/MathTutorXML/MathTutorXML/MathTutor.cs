// Fig. 23.31: MathTutor.cs
// Math tutor using EquationGeneratorServiceXML to create equations.
using System;
using System.Net;
using System.Windows.Forms;
using System.Xml.Linq;

namespace MathTutorXML
{
   public partial class MathTutor : Form
   {
      private string operation = "add"; // the default operation
      private int level = 1; // the default difficulty level
      private string leftHandSide; // the left side of the equation
      private int result; // the answer
      private XNamespace xmlNamespace =
         XNamespace.Get( "http://schemas.datacontract.org/2004/07/" );

      // object used to invoke service
      private WebClient service = new WebClient(); 

      public MathTutor()
      {
         InitializeComponent();

         // add DownloadStringCompleted event handler to WebClient
         service.DownloadStringCompleted
            += new DownloadStringCompletedEventHandler(
            service_DownloadStringCompleted );
      } // end constructor

      // generates new equation when user clicks button
      private void generateButton_Click( object sender, EventArgs e )
      {
         // send request to EquationGeneratorServiceXML
         service.DownloadStringAsync( new Uri(
            "http://localhost:50109/EquationGeneratorServiceXML" +
            "/Service.svc/equation/" + operation + "/" + level ) );
      } // end method generateButton_Click

      // process web service response
      private void service_DownloadStringCompleted(
         object sender, DownloadStringCompletedEventArgs e )
      {
         // check if any errors occurred in retrieving service data
         if ( e.Error == null )
         {
            // parse response and get LeftHandSide and Result values
            XDocument xmlResponse = XDocument.Parse( e.Result );
            leftHandSide = xmlResponse.Element(
               xmlNamespace + "Equation" ).Element( 
               xmlNamespace + "LeftHandSide" ).Value;
            result = Convert.ToInt32( xmlResponse.Element(
               xmlNamespace + "Equation" ).Element( 
               xmlNamespace + "Result" ).Value );

            // display left side of equation
            questionLabel.Text = leftHandSide; 
            okButton.Enabled = true; // enable okButton
            answerTextBox.Enabled = true; // enable answerTextBox
         } // end if
      } // end method client_DownloadStringCompleted

      // check user's answer
      private void okButton_Click( object sender, EventArgs e )
      {
         if ( !string.IsNullOrEmpty( answerTextBox.Text ) )
         {
            // get user's answer
            int userAnswer = Convert.ToInt32( answerTextBox.Text );

            // determine whether user's answer is correct
            if ( result == userAnswer )
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

      // set the operation to addition // end method additionRadioButton_CheckedChanged

      // set the operation to subtraction
      private void subtractionRadioButton_CheckedChanged( object sender,
         EventArgs e )
      {

      } // end method subtractionRadioButton_CheckedChanged

      // set the operation to multiplication
      private void multiplicationRadioButton_CheckedChanged(
         object sender, EventArgs e )
      {

      } // end method multiplicationRadioButton_CheckedChanged

      // set difficulty level to 1
      private void levelOneRadioButton_CheckedChanged( object sender,
         EventArgs e )
      {

      } // end method levelOneRadioButton_CheckedChanged

      // set difficulty level to 2
      private void levelTwoRadioButton_CheckedChanged( object sender,
         EventArgs e )
      {

      } // end method levelTwoRadioButton_CheckedChanged

      // set difficulty level to 3
      private void levelThreeRadioButton_CheckedChanged( object sender,
         EventArgs e )
      {

      }

      private void additionRadioButton_CheckedChanged(object sender, EventArgs e)
      {

      } // end method levelThreeRadioButton_CheckedChanged
   } // end class MathTutor
} // end namespace MathTutorXML

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