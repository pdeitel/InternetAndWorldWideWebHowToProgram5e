<%@ Page Language="C#" AutoEventWireup="true" CodeFile="WebTime.aspx.cs" Inherits="WebTime" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>A Simple Web Form Example</title>
    <style type="text/css">
       .timeStyle {
          color: #FFFF00;
          font-size: xx-large;
          background-color: #000000;
       }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
       <h2>
          Current time on the Web server:</h2>
       <p>
          <asp:Label ID="timeLabel" runat="server" CssClass="timeStyle"></asp:Label>
       </p>
    
    </div>
    </form>
</body>
</html>
