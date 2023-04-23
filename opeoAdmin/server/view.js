const fs = require('fs');
const static = require('../config/path');

exports.index = (req,res,path) =>{
        if (req.url =='/'){
            fs.readFile(path[0] + 'admin.html' ,(err,data) =>{
                if (err){
                    console.log(err.message);
                }
                res.end(data);
            })
        }else if (req.url =='/webapp/css/nav.css'){
            fs.readFile(path[1] + 'nav.css' ,(err,data) =>{
                if (err){
                    console.log(err.message);
                }
                res.end(data);
            })
        }else if (req.url =='/webapp/js/nav.js'){
            fs.readFile(path[2] + 'nav.js' ,(err,data) =>{
                if (err){
                    console.log(err.message);
                }
                res.end(data);
            })
        }
};


exports.moduleCall = (req,res,path) => {
        if (req.url =='/webapp/js/module_call.js'){
            fs.readFile(path[2] + 'module_call.js' ,(err,data) =>{
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


