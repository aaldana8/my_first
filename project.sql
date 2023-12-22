SELECT * FROM questionSystem.questions;
set @count=0;
UPDATE questions SET id=@count:=@count+1;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ajh123456';
