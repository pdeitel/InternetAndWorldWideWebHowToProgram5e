<%-- Web Form that allows users to reserve seats on a plane. --%>
<%@ Page Language="C#" AutoEventWireup="true" 
   CodeFile="ReservationClient.aspx.cs" Inherits="ReservationClient" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Ticket Reservation</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
      <asp:Label ID="instructionsLabel" runat="server" 
         Text="Please select the seat type and class to reserve:">
      </asp:Label>
      <br /><br />
      <%-- seat options --%>
      <asp:DropDownList ID="seatList" runat="server" 
         Height="22px" Width="100px">
         <asp:ListItem>Aisle</asp:ListItem>
         <asp:ListItem>Middle</asp:ListItem>
         <asp:ListItem>Window</asp:ListItem>
      </asp:DropDownList>
      &nbsp; &nbsp;&nbsp;
      <%-- class options --%>
      <asp:DropDownList ID="classList" runat="server" Width="100px">
         <asp:ListItem>Economy</asp:ListItem>
         <asp:ListItem>First</asp:ListItem>
      </asp:DropDownList>
      &nbsp; &nbsp;&nbsp;
      <%-- submit selections to server --%>
      <asp:Button ID="reserveButton" runat="server" Text="Reserve" 
         Width="102px" onclick="reserveButton_Click" />
      <br /><br />
      <asp:Label ID="errorLabel" runat="server" ForeColor="#C00000" 
         Height="19px" Width="343px"></asp:Label>
    </div>
    </form>
</body>
</html>

<%-- 
 ************************************************************************** 
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
 **************************************************************************
--%>