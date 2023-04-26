const fs = require('fs');
const static = require('../config/path');



exports.index = (req,res,filetype) =>{
        if (req.url =='/'){
            fs.readFile(filetype[0] + 'admin.html' ,(err,data) =>{
                if (err){
                    console.log(err.message);
                }
                res.end(data);
                
            })
        }else if (req.url =='/webapp/css/nav.css'){
            fs.readFile(filetype[1] + 'nav.css' ,(err,data) =>{
                if (err){
                    console.log(err.message);
                }
                res.end(data);
            })
        }else if (req.url =='/webapp/js/nav.js'){
            fs.readFile(filetype[2] + 'nav.js' ,(err,data) =>{
                if (err){
                    console.log(err.message);
                }
                res.end(data);
            })
        }else if(req.url == '/favicon.ico'){
            res.end();
        }else if (req.url == '/webapp/js/init_page.js'){
            fs.readFile(filetype[2] + 'init_page.js' ,(err,data) =>{
                if (err){
                    console.log(err.message);
                }
                res.end(data);
            })
        }
};


exports.moduleCall = (req,res,filetype) => {
        if (req.url =='/webapp/js/module_call.js'){
            fs.readFile(filetype[2] + 'module_call.js' ,(err,data) =>{
                if (err){
                    console.log(err.message);
                }
                res.end(data);
            })
        }else if(req.url =='/webapp/js/data_page.js'){
            fs.readFile(filetype[2] + 'data_page.js' ,(err,data) =>{
                if (err){
                    console.log(err.message);
                }
                res.end(data);
            })
        }else if(req.url =='/webapp/css/data_page.css'){
            fs.readFile(filetype[1] + 'data_page.css' ,(err,data) =>{
                if (err){
                    console.log(err.message);
                }
                res.end(data);
            })
        }   
  
}






exports.getLnk=(res) =>{
        res.send(static.getUrl());
}


