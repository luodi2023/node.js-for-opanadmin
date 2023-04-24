const fs = require('fs');
const http = require('http');
const express = require('express');
const static = require('../config/path');
const view =  require('./view');



const webpath = static.getPath();
const url = static.getUrl();

html = webpath['web'] + webpath['file'][0];
css = webpath['web'] + webpath['file'][1];
js = webpath['web'] + webpath['file'][2];

const pathObj = [html,css,js];

// 创建 web 服务器实例
const app = http.createServer();

app.on('request',(req, res) =>{
         view.index(req,res,pathObj);
         view.moduleCall(req,res,pathObj);
})

//  启动web服务器

app.listen(8000, () =>{
    console.log("已启动 web服务器 端口为8000;");
})


//创建ajax服务器

const ajaxApp = express();

ajaxApp.all('*',(req,res,next) =>{
      //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    
    next();
})



ajaxApp.get('/getlink',(req,res)  =>{
   view.getLnk(res);
   
})


ajaxApp.get('/dashboard',(req,res)  =>{
        res.send();
}) 

// personnel

ajaxApp.get('/personnel/user',(req,res)  =>{
    res.send();
}) 

ajaxApp.get('/personnel/group',(req,res)  =>{
    res.send();    
}) 
ajaxApp.get('/personnel/fieldRelation',(req,res)  =>{
    res.send();    
}) 

// system

ajaxApp.get('/system/role',(req,res)  =>{
    res.send();    
}) 
ajaxApp.get('/system/menu',(req,res)  =>{
    res.send();    
}) 
ajaxApp.get('/system/api',(req,res)  =>{
    res.send();   
}) 

// log

ajaxApp.get('/log/operation-log',(req,res)  =>{
    res.send();   
}) 




ajaxApp.listen(3000,()=>{
    console.log('已启动 ajax服务器 端口为3000');
})

