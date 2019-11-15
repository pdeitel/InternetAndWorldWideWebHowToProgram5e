<?xml version = "1.0"?>

<!-- Fig. 15.21: sorting.xsl -->
<!-- Transformation of book information into HTML5 -->
<xsl:stylesheet version = "1.0"                       
   xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

   <!-- write XML declaration and DOCTYPE DTD information -->
   <xsl:output method = "html" doctype-system = "about:legacy-compat" />

   <!-- match document root -->
   <xsl:template match = "/">  
      <html>
         <xsl:apply-templates/>
      </html>
   </xsl:template>
   
   <!-- match book -->          
   <xsl:template match = "book">
      <head>
         <meta charset = "utf-8"/>
         <link rel = "stylesheet" type = "text/css" href = "style.css"/>
         <title>ISBN <xsl:value-of select = "@isbn"/> - 
            <xsl:value-of select = "title"/></title>    
      </head>

      <body>
         <h1><xsl:value-of select = "title"/></h1>
         <h2>by 
            <xsl:value-of select = "author/lastName"/>,     
            <xsl:value-of select = "author/firstName"/></h2>

         <table>

            <xsl:for-each select = "chapters/frontMatter/*">
               <tr>
                  <td>
                     <xsl:value-of select = "name()"/>
                  </td>

                  <td>
                     ( <xsl:value-of select = "@pages"/> pages )
                  </td>
               </tr>
            </xsl:for-each>

            <xsl:for-each select = "chapters/chapter">
               <xsl:sort select = "@number" data-type = "number" 
                    order = "ascending"/>                        
               <tr>
                  <td>
                     Chapter <xsl:value-of select = "@number"/>
                  </td>

                  <td>
                     <xsl:value-of select = "text()"/>
                     ( <xsl:value-of select = "@pages"/> pages )
                  </td>
               </tr>
            </xsl:for-each>

            <xsl:for-each select = "chapters/appendix">
               <xsl:sort select = "@number" data-type = "text" 
                  order = "ascending"/>                        
               <tr>
                  <td>
                     Appendix <xsl:value-of select = "@number"/>
                  </td>

                  <td>
                     <xsl:value-of select = "text()"/>
                     ( <xsl:value-of select = "@pages"/> pages )
                  </td>
               </tr>
            </xsl:for-each>
         </table>

         <p>Pages: 
            <xsl:variable name = "pagecount"       
               select = "sum(chapters//*/@pages)"/>
            <xsl:value-of select = "$pagecount"/></p> 
         <p>Media Type: <xsl:value-of select = "media/@type"/></p>
      </body>
   </xsl:template>
</xsl:stylesheet>


<!-- 
 ************************************************************************** 
 * (C) Copyright 1992-2006 by Deitel & Associates, Inc. and               *
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