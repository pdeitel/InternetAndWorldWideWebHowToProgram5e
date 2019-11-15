<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Recommendations.aspx.cs" Inherits="Recommendations" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Book Recommendations</title>
    <style type="text/css">
       .labelStyle
       {
          font-size: x-large;
          font-weight: bold;
       }
       .listBoxStyle
       {
          width: 450px;
          height: 125px;
       }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
       <asp:Label ID="recommendationsLabel" runat="server" CssClass="labelStyle" 
          Text="Recommendations"></asp:Label>
       <br />
       <br />
       <asp:ListBox ID="booksListBox" runat="server" CssClass="listBoxStyle">
       </asp:ListBox>
       <br />
       <br />
       <asp:HyperLink ID="languageLink" runat="server" NavigateUrl="~/Options.aspx">Click here to choose another language</asp:HyperLink>
    </div>
    </form>
</body>
</html>
