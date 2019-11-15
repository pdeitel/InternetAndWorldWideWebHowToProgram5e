// Equation.cs
// Class Equation that contains information about an equation.
using System.Runtime.Serialization;

[DataContract]
public class Equation
{
   // automatic property to access the left operand 
   [DataMember]
   private int Left { get; set; }

   // automatic property to access the right operand 
   [DataMember]
   private int Right { get; set; }

   // automatic property to access the result of applying
   // an operation to the left and right operands
   [DataMember]
   private int Result { get; set; }

   // automatic property to access the operation
   [DataMember]
   private string Operation { get; set; }

   // required default constructor
   public Equation()
      : this( 0, 0, "add" )
   {
      // empty body
   } // end default constructor

   // three-argument constructor for class Equation
   public Equation( int leftValue, int rightValue, string type )
   {
      Left = leftValue;
      Right = rightValue;

      switch ( type ) // perform appropriate operation
      {
         case "add": // addition
            Result = Left + Right;
            Operation = "+";
            break;
         case "subtract": // subtraction
            Result = Left - Right;
            Operation = "-";
            break;
         case "multiply": // multiplication
            Result = Left * Right;
            Operation = "*";
            break;
      } // end switch
   } // end three-argument constructor

   // return string representation of the Equation object
   public override string ToString()
   {
      return string.Format( "{0} {1} {2} = {4}", Left, Operation,
         Right, Result );
   } // end method ToString

   // property that returns a string representing left-hand side
   [DataMember]
   private string LeftHandSide
   {
      get
      {
         return string.Format( "{0} {1} {2}", Left, Operation, Right );
      } // end get
      set
      {
         // empty body
      } // end set
   } // end property LeftHandSide

   // property that returns a string representing right-hand side
   [DataMember]
   private string RightHandSide
   {
      get
      {
         return Result.ToString();
      } // end get
      set
      {
         // empty body
      } // end set
   } // end property RightHandSide
} // end class Equation

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