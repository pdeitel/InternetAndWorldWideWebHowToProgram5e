// EquationGeneratorService.cs
// WCF REST service to create random equations based on a
// specified operation and difficulty level.
using System;

public class EquationGeneratorService : IEquationGeneratorService
{
   // method to generate a math equation
   public Equation GenerateEquation( string operation, string level )
   {
      // calculate maximum and minimum number to be used
      int maximum =
         Convert.ToInt32( Math.Pow( 10, Convert.ToInt32( level ) ) );
      int minimum =
         Convert.ToInt32( Math.Pow( 10, Convert.ToInt32( level ) - 1 ) );

      Random randomObject = new Random(); // generate random numbers

      // create Equation consisting of two random
      // numbers in the range minimum to maximum 
      Equation newEquation = new Equation(
         randomObject.Next( minimum, maximum ),
         randomObject.Next( minimum, maximum ), operation );

      return newEquation;
   } // end method GenerateEquation
} // end class EquationGeneratorService

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