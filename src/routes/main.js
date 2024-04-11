const express = require('express');
const { route } = require('express/lib/application')
const routes = express.Router();

routes.get("/",(req,res) =>{
res.render("index")
});
routes.get("/about",(req,res) =>{
res.render("about")
});
routes.get("/gallery",(req,res) =>{
res.render("gallery")
});

module.exports=routes;