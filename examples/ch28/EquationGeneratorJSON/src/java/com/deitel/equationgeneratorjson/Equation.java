// Fig. 31.22: Equation.java
// Equation class that contains information about an equation.
package com.deitel.equationgeneratorjson;

public class Equation
{
   private int leftOperand;
   private int rightOperand;
   private int result;
   private String operationType;

   // required no-argument constructor
   public Equation()
   {
      this( 0, 0, "add" );
   } // end no-argument constructor

   // constructor that receives the operands and operation type
   public Equation( int leftValue, int rightValue, String type )
   {
      leftOperand = leftValue;
      rightOperand = rightValue;

      // determine result
      if ( type.equals( "add" ) ) // addition
      {
         result = leftOperand + rightOperand;
         operationType = "+";
      } // end if
      else if ( type.equals( "subtract" ) ) // subtraction
      {
         result = leftOperand - rightOperand;
         operationType = "-";
      } // end if
      else // multiplication
      {
         result = leftOperand * rightOperand;
         operationType = "*";
      } // end else
   } // end three argument constructor

   // gets the leftOperand
   public int getLeftOperand()
   {
      return leftOperand;
   } // end method getLeftOperand

   // required setter
   public void setLeftOperand( int value )
   {
      leftOperand = value;
   } // end method setLeftOperand

   // gets the rightOperand
   public int getRightOperand()
   {
      return rightOperand;
   } // end method getRightOperand

   // required setter
   public void setRightOperand( int value )
   {
      rightOperand = value;
   } // end method setRightOperand

   // gets the resultValue
   public int getResult()
   {
      return result;
   } // end method getResult

   // required setter
   public void setResult( int value )
   {
      result = value;
   } // end method setResult

   // gets the operationType
   public String getOperationType()
   {
      return operationType;
   } // end method getOperationType

   // required setter
   public void setOperationType( String value )
   {
      operationType = value;
   } // end method setOperationType
   
   // returns the left hand side of the equation as a String
   public String getLeftHandSide()
   {
      return leftOperand + " " + operationType + " " + rightOperand;
   } // end method getLeftHandSide

   // returns the right hand side of the equation as a String
   public String getRightHandSide()
   {
      return "" + result;
   } // end method getRightHandSide

   // returns a String representation of an Equation
   public String toString()
   {
      return getLeftHandSide() + " = " + getRightHandSide();
   } // end method toString
} // end class Equation

/**************************************************************************
 * (C) Copyright 1992-2010 by Deitel & Associates, Inc. and               *
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
 *************************************************************************/
