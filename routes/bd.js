var mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'remotemysql.com',
    user:'YIqB3Z3uYz',
    password:'jhVRumJf0e',
    database:'YIqB3Z3uYz'
});

conexion.connect(function (error){
    if (error)
        console.log('Problemas de conexion con mysql');
    else
        console.log('se inicio conexion');
});


module.exports=conexion;
