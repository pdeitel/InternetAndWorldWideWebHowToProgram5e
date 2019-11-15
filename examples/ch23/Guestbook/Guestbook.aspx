<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Guestbook.aspx.cs" Inherits="Guestbook" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Guestbook</title>
    <style type="text/css">
       .style1
       {
          width: 100%;
       }
       .singleLineTextBox
       {
          width: 300px;
       }
       .multilineTextBox
       {
          width: 300px;
          height: 100px;
       }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
       <h3>
          Please leave a message in our guestbook:</h3>
       <table class="style1">
          <tr>
             <td valign="top">
                Name:</td>
             <td valign="top">
                <asp:TextBox ID="nameTextBox" runat="server" CssClass="singleLineTextBox"></asp:TextBox>
             </td>
          </tr>
          <tr>
             <td valign="top">
                E-mail:</td>
             <td valign="top">
                <asp:TextBox ID="emailTextBox" runat="server" CssClass="singleLineTextBox"></asp:TextBox>
             </td>
          </tr>
          <tr>
             <td valign="top">
                Tell the world:</td>
             <td valign="top">
                <asp:TextBox ID="messageTextBox" runat="server" CssClass="multilineTextBox" 
                   TextMode="MultiLine"></asp:TextBox>
             </td>
          </tr>
          <tr>
             <td valign="top">
                &nbsp;</td>
             <td valign="top">
                <asp:Button ID="submitButton" runat="server" Text="Submit" 
                   onclick="submitButton_Click" />
                &nbsp;<asp:Button ID="clearButton" runat="server" Text="Clear" 
                   onclick="clearButton_Click" />
             </td>
          </tr>
       </table>
       <p>
          <asp:GridView ID="messagesGridView" runat="server" AutoGenerateColumns="False" 
             CellPadding="4" DataKeyNames="MessageID" DataSourceID="messagesLinqDataSource" 
             ForeColor="#333333" GridLines="None" Width="650px">
             <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
             <Columns>
                <asp:BoundField DataField="Date" HeaderText="Date" SortExpression="Date" />
                <asp:BoundField DataField="Name" HeaderText="Name" SortExpression="Name" />
                <asp:BoundField DataField="Email" HeaderText="Email" SortExpression="Email" />
                <asp:BoundField DataField="Message1" HeaderText="Message" 
                   SortExpression="Message1" />
             </Columns>
             <EditRowStyle BackColor="#999999" />
             <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
             <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
             <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
             <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
             <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
             <SortedAscendingCellStyle BackColor="#E9E7E2" />
             <SortedAscendingHeaderStyle BackColor="#506C8C" />
             <SortedDescendingCellStyle BackColor="#FFFDF8" />
             <SortedDescendingHeaderStyle BackColor="#6F8DAE" />
          </asp:GridView>
          <asp:LinqDataSource ID="messagesLinqDataSource" runat="server" 
             ContextTypeName="GuestbookDataContext" EnableInsert="True" EntityTypeName="" 
             TableName="Messages">
          </asp:LinqDataSource>
       </p>
    </div>
    </form>
</body>
</html>
