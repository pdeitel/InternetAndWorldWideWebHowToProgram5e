<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Validation.aspx.cs" Inherits="Validation" %>

<%@ Register assembly="AjaxControlToolkit" namespace="AjaxControlToolkit" tagprefix="asp" %>

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
          <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
          </asp:ToolkitScriptManager>
          Please fill out all the fileds in the following form:</h3>
       <asp:TabContainer ID="TabContainer1" runat="server" ActiveTabIndex="0" 
          Width="450px">
          <asp:TabPanel runat="server" HeaderText="Name" ID="TabPanel1">
             <ContentTemplate>
                <table class="style1">
                   <tr>
                      <td>
                         Name:</td>
                      <td valign="top">
                         <asp:TextBox ID="nameTextBox" runat="server"></asp:TextBox>
                         <br />
                         <asp:RequiredFieldValidator ID="nameRequiredFieldValidator" runat="server" 
                            ControlToValidate="nameTextBox" Display="None" 
                            ErrorMessage="Please enter your name" ForeColor="Red"></asp:RequiredFieldValidator>
                         <asp:ValidatorCalloutExtender ID="nameRequiredFieldValidator_ValidatorCalloutExtender" 
                            runat="server" Enabled="True" TargetControlID="nameRequiredFieldValidator">
                         </asp:ValidatorCalloutExtender>
                      </td>
                   </tr>
                </table>
             </ContentTemplate>
          </asp:TabPanel>
          <asp:TabPanel ID="TabPanel2" runat="server" HeaderText="Contact">
             <ContentTemplate>
                <table class="style1">
                   <tr>
                      <td valign="top">
                         E-mail:</td>
                      <td valign="top">
                         <asp:TextBox ID="emailTextBox" runat="server"></asp:TextBox>
                         &nbsp;e.g., email@domain.com<br />
                         <asp:RequiredFieldValidator ID="emailRequiredFieldValidator" runat="server" 
                            ControlToValidate="emailTextBox" Display="None" 
                            ErrorMessage="Please enter your e-mail address" ForeColor="Red"></asp:RequiredFieldValidator>
                         <asp:ValidatorCalloutExtender ID="emailRequiredFieldValidator_ValidatorCalloutExtender" 
                            runat="server" Enabled="True" TargetControlID="emailRequiredFieldValidator">
                         </asp:ValidatorCalloutExtender>
                         <asp:RegularExpressionValidator ID="emailRegularExpressionValidator" 
                            runat="server" ControlToValidate="emailTextBox" Display="None" 
                            ErrorMessage="Please enter an e-mail address in a valid format" ForeColor="Red" 
                            ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
                         <asp:ValidatorCalloutExtender ID="emailRegularExpressionValidator_ValidatorCalloutExtender" 
                            runat="server" Enabled="True" TargetControlID="emailRegularExpressionValidator">
                         </asp:ValidatorCalloutExtender>
                      </td>
                   </tr>
                   <tr>
                      <td valign="top">
                         Phone:</td>
                      <td valign="top">
                         <asp:TextBox ID="phoneTextBox" runat="server"></asp:TextBox>
                         &nbsp;e.g., (555) 555-1234<br />
                         <asp:RequiredFieldValidator ID="phoneRequiredFieldValidator" runat="server" 
                            ControlToValidate="phoneTextBox" Display="None" 
                            ErrorMessage="Please enter your phone number" ForeColor="Red"></asp:RequiredFieldValidator>
                         <asp:ValidatorCalloutExtender ID="phoneRequiredFieldValidator_ValidatorCalloutExtender" 
                            runat="server" Enabled="True" TargetControlID="phoneRequiredFieldValidator">
                         </asp:ValidatorCalloutExtender>
                         <asp:RegularExpressionValidator ID="phoneRegularExpressionValidator" 
                            runat="server" ControlToValidate="phoneTextBox" Display="None" 
                            ErrorMessage="Please enter a phone number in a valid format" ForeColor="Red" 
                            ValidationExpression="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"></asp:RegularExpressionValidator>
                         <asp:ValidatorCalloutExtender ID="phoneRegularExpressionValidator_ValidatorCalloutExtender" 
                            runat="server" Enabled="True" TargetControlID="phoneRegularExpressionValidator">
                         </asp:ValidatorCalloutExtender>
                      </td>
                   </tr>
                </table>
             </ContentTemplate>
          </asp:TabPanel>
       </asp:TabContainer>
       <asp:UpdatePanel ID="UpdatePanel1" runat="server">
          <ContentTemplate>
             <p>
                <asp:Button ID="submitButton" runat="server" Text="Submit" />
             </p>
             <p>
                <asp:Label ID="outputLabel" runat="server" Visible="False"></asp:Label>
             </p>
          </ContentTemplate>
          <Triggers>
             <asp:AsyncPostBackTrigger ControlID="submitButton" EventName="Click" />
          </Triggers>
       </asp:UpdatePanel>
    </div>
    </form>
</body>
</html>
