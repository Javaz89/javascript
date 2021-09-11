var connection = new ActiveXObject("ADODB.Connection") ;

var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<javaz>;Password=<javaz>;Provider=SQLOLEDB";

connection.Open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM sesion", connection);
rs.MoveFirst
while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close; 