const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data")

server.use(express.static('public')); // caminho dos elementos estáticos

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("about");
});

server.get("/portfolio", function(req, res) {
    return res.render("portfolio");
});

server.listen(5000, function(){
    console.log('server is running');
})