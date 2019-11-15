<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Validation.aspx.cs" Inherits="Validation" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Demonstrating Validation Controls</title>
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
          Please fill out all the fileds in the following form:</h3>
       <table class="style1">
          <tr>
             <td valign="top">
                Name:</td>
             <td valign="top">
                <asp:TextBox ID="nameTextBox" runat="server"></asp:TextBox>
                <br />
                <asp:RequiredFieldValidator ID="nameRequiredFieldValidator" runat="server" 
                   ControlToValidate="nameTextBox" Display="Dynamic" 
                   ErrorMessage="Please enter your name" ForeColor="Red"></asp:RequiredFieldValidator>
             </td>
          </tr>
          <tr>
             <td valign="top">
                E-mail:</td>
             <td valign="top">
                <asp:TextBox ID="emailTextBox" runat="server"></asp:TextBox>
                &nbsp;e.g., email@domain.com<br />
                <asp:RequiredFieldValidator ID="emailRequiredFieldValidator" runat="server" 
                   ControlToValidate="emailTextBox" Display="Dynamic" 
                   ErrorMessage="Please enter your e-mail address" ForeColor="Red"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="emailRegularExpressionValidator" 
                   runat="server" ControlToValidate="emailTextBox" Display="Dynamic" 
                   ErrorMessage="Please enter an e-mail address in a valid format" ForeColor="Red" 
                   ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
             </td>
          </tr>
          <tr>
             <td valign="top">
                Phone:</td>
             <td valign="top">
                <asp:TextBox ID="phoneTextBox" runat="server"></asp:TextBox>
                &nbsp;e.g., (555) 555-1234<br />
                <asp:RequiredFieldValidator ID="phoneRequiredFieldValidator" runat="server" 
                   ControlToValidate="phoneTextBox" Display="Dynamic" 
                   ErrorMessage="Please enter your phone number" ForeColor="Red"></asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="phoneRegularExpressionValidator" 
                   runat="server" ControlToValidate="phoneTextBox" Display="Dynamic" 
                   ErrorMessage="Please enter a phone number in a valid format" ForeColor="Red" 
                   ValidationExpression="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"></asp:RegularExpressionValidator>
             </td>
          </tr>
       </table>
       <p>
          <asp:Button ID="submitButton" runat="server" Text="Submit" />
       </p>
       <p>
          <asp:Label ID="outputLabel" runat="server" Visible="False"></asp:Label>
       </p>
    </div>
    </form>
</body>
</html>
