<?xml version = "1.0"?>
<!-- Fig. 15.19: sports.xsl  -->
<!-- A simple XSLT transformation  -->

<!-- reference XSL style sheet URI -->
<xsl:stylesheet version = "1.0" 
   xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

   <xsl:output method = "html" doctype-system = "about:legacy-compat" />
   <xsl:template match = "/"> <!-- match root element -->

   <html>
      <head>
         <meta charset = "utf-8"/>
         <link rel = "stylesheet" type = "text/css" href = "style.css"/>
         <title>Sports</title>
      </head>

      <body>
         <table>
	    <caption>Information about various sports</caption>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Sport</th>
                  <th>Information</th>
               </tr>
            </thead>

            <!-- insert each name and paragraph element value -->
            <!-- into a table row. -->
            <xsl:for-each select = "/sports/game">
               <tr>
                  <td><xsl:value-of select = "@id"/></td>      
                  <td><xsl:value-of select = "name"/></td>     
                  <td><xsl:value-of select = "paragraph"/></td>
               </tr>
            </xsl:for-each>
         </table>
      </body>
   </html>

   </xsl:template>
</xsl:stylesheet>


<!-- 
 ************************************************************************** 
 * (C) Copyright 1992-2012 by Deitel & Associates, Inc. and               *
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
 **************************************************************************
-->