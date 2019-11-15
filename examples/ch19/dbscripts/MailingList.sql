DROP DATABASE IF EXISTS mailingList;

CREATE DATABASE mailingList;

USE mailingList;

CREATE TABLE contacts
(
   ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   LastName varchar(30),
   FirstName varchar(30),
   Email varchar(64),
   Phone varchar(14),
   Book varchar(60),
   OS varchar(30)
);


