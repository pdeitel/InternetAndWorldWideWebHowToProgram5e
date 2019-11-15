<%@ Page Language="C#" AutoEventWireup="true" CodeFile="WebControls.aspx.cs" Inherits="WebControls" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Web Controls Demonstration</title>
    <style type="text/css">

        .style1
        {
            width: 100%;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
       <h3>
          Registration Form</h3>
       <p>
          Please fill in all fields and click the Register button.</p>
       <p>
          <asp:Image ID="userInformationImage" runat="server" 
             ImageUrl="~/images/user.png" />
       </p>
       <table class="style1">
          <tr>
             <td valign="top">
                <asp:Image ID="firstNameImage" runat="server" ImageUrl="~/images/fname.png" />
                <asp:TextBox ID="firstNameTextBox" runat="server"></asp:TextBox>
             </td>
             <td valign="top">
                <asp:Image ID="lastNameImage" runat="server" ImageUrl="~/images/lname.png" />
                <asp:TextBox ID="lastNameTextBox" runat="server"></asp:TextBox>
             </td>
          </tr>
          <tr>
             <td valign="top">
                <asp:Image ID="emailImage" runat="server" ImageUrl="~/images/email.png" />
                <asp:TextBox ID="emailTextBox" runat="server"></asp:TextBox>
             </td>
             <td valign="top">
                <asp:Image ID="phoneImage" runat="server" ImageUrl="~/images/phone.png" />
                <asp:TextBox ID="phoneTextBox" runat="server"></asp:TextBox>
             </td>
          </tr>
       </table>
       <p>
          <asp:Image ID="publicationsImage" runat="server" 
             ImageUrl="~/images/publications.png" />
       </p>
       <p>
          Which book would you like information about?<br />
          <asp:DropDownList ID="booksDropDownList" runat="server">
             <asp:ListItem>Visual Basic 2010 How to Program</asp:ListItem>
             <asp:ListItem>Visual C# 2010 How to Program</asp:ListItem>
             <asp:ListItem>Java How to Program</asp:ListItem>
             <asp:ListItem>C++ How to Program</asp:ListItem>
          </asp:DropDownList>
       </p>
       <p>
          <asp:HyperLink ID="booksHyperLink" runat="server" 
             NavigateUrl="http://www.deitel.com" Target="_blank">Click here to view more information about our books</asp:HyperLink>
       </p>
       <p>
          <asp:Image ID="osImage" runat="server" ImageUrl="~/images/os.png" />
       </p>
       <p>
          <asp:RadioButtonList ID="osRadioButtonList" runat="server">
             <asp:ListItem Value="Windows 7"></asp:ListItem>
             <asp:ListItem Value="Windows Vista"></asp:ListItem>
             <asp:ListItem Value="Windows XP"></asp:ListItem>
             <asp:ListItem Value="Mac OS X"></asp:ListItem>
             <asp:ListItem Value="Linux"></asp:ListItem>
             <asp:ListItem>Other</asp:ListItem>
          </asp:RadioButtonList>
       </p>
       <p>
          <asp:Button ID="registerButton" runat="server" Text="Register" />
       </p>
    </div>
    </form>
</body>
</html>
