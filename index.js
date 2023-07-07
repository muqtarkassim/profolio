const express= require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs")
const path = require('path');
const app=express()
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("home")
})










app.listen(3000,function(req,res){
    console.log("listenning")
})