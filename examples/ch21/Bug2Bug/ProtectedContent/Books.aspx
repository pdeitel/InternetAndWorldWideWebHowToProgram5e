<%@ Page Title="Books" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Books.aspx.cs" Inherits="ProtectedContent_Books" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
   <p>
      Author:
      <asp:DropDownList ID="authorsDropDownList" runat="server" AutoPostBack="True" 
         DataSourceID="authorsLinqDataSource" DataTextField="Name" 
         DataValueField="AuthorID" 
         onselectedindexchanged="authorsDropDownList_SelectedIndexChanged">
      </asp:DropDownList>
      <asp:LinqDataSource ID="authorsLinqDataSource" runat="server" 
         onselecting="authorsLinqDataSource_Selecting">
      </asp:LinqDataSource>
      <asp:GridView ID="titlesGridView" runat="server" AllowPaging="True" 
         AllowSorting="True" AutoGenerateColumns="False" 
         DataSourceID="titlesLinqDataSource" PageSize="4" Width="580px">
         <Columns>
            <asp:BoundField DataField="ISBN" HeaderText="ISBN" SortExpression="ISBN" />
            <asp:BoundField DataField="Title1" HeaderText="Title" SortExpression="Title1" />
            <asp:BoundField DataField="EditionNumber" HeaderText="Edition Number" 
               SortExpression="EditionNumber" />
            <asp:BoundField DataField="Copyright" HeaderText="Copyright" 
               SortExpression="Copyright" />
         </Columns>
      </asp:GridView>
      <asp:LinqDataSource ID="titlesLinqDataSource" runat="server" 
         onselecting="titlesLinqDataSource_Selecting">
      </asp:LinqDataSource>
   </p>
</asp:Content>

