// Fig. 27.17: ProtectedContent_Books.aspx.cs
// Code-behind file for the password-protected Books page.
using System;
using System.Linq;
using System.Web.UI.WebControls;

public partial class ProtectedContent_Books : System.Web.UI.Page
{
   // data context queried by data sources 
   BooksDataContext database = new BooksDataContext();

   // specify the Select query that creates a combined first and last name
   protected void authorsLinqDataSource_Selecting( object sender, 
      LinqDataSourceSelectEventArgs e )
   {
      e.Result = 
         from author in database.Authors
         select new { Name = author.FirstName + " " + author.LastName, 
            author.AuthorID };
   } // end method authorsLinqDataSource_Selecting

   // specify the Select query that gets the specified author's books
   protected void titlesLinqDataSource_Selecting( object sender, 
      LinqDataSourceSelectEventArgs e )
   {
      e.Result = 
         from book in database.AuthorISBNs
         where book.AuthorID == 
            Convert.ToInt32( authorsDropDownList.SelectedValue )
         select book.Title;
   } // end method titlesLinqDataSource_Selecting

   // refresh the GridView when a different author is selected
   protected void authorsDropDownList_SelectedIndexChanged( 
      object sender, EventArgs e )
   {
      titlesGridView.DataBind(); // update the GridView
   } // end method authorsDropDownList_SelectedIndexChanged
} // end class ProtectedContent_Books


/*************************************************************************
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
*************************************************************************/

