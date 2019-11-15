// Fig. 28.30: IEquationGeneratorService.cs
// WCF REST service interface to create random equations based on a
// specified operation and difficulty level.
using System.ServiceModel;
using System.ServiceModel.Web;

[ServiceContract]
public interface IEquationGeneratorService
{
   // method to generate a math equation
   [OperationContract]
   [WebGet( ResponseFormat = WebMessageFormat.Json,
      UriTemplate = "equation/{operation}/{level}" )]
   Equation GenerateEquation( string operation, string level );
} // end interface IEquationGeneratorService

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