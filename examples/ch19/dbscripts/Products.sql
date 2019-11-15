DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

CREATE TABLE books
(
   ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   Title varchar(60),
   Category varchar(32),
   ISBN varchar(20)
);

INSERT INTO books (Title,Category,ISBN) VALUES ('Visual Basic 2010 How to Program','Programming','0132152134');
INSERT INTO books (Title,Category,ISBN) VALUES ('Visual C# 2010 How to Program','Programming','0132151421');
INSERT INTO books (Title,Category,ISBN) VALUES ('Java How to Program','Programming','0132575663');
INSERT INTO books (Title,Category,ISBN) VALUES ('C++ How to Program','Programming','0132662361');
INSERT INTO books (Title,Category,ISBN) VALUES ('C How to Program','Programming','0136123562');
INSERT INTO books (Title,Category,ISBN) VALUES ('Internet & World Wide Web How to Program','Programming','0132151006');
INSERT INTO books (Title,Category,ISBN) VALUES ('Operating Systems','Operating Systems','0131828274');

