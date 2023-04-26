const mysql = require('mysql');


const conn =  mysql.createConnection({
    host :'localhost',
    port : 3306,
    user : 'root',
    password : '123456',
    database : 'openadmin'
})

conn.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('connect success!');
    }
    
})

exports.tb_user = conn

