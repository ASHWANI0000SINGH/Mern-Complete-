const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ashwani'
});
 
connection.connect((err)=>{
  if(err){
    console.log("error");
  }else{
    console.log("connected")
  }
})

connection.query("select * from products",(err,result)=>{
    console.log(result);
})