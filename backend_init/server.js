const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data")

server.use(express.static('public')); // caminho dos elementos estáticos

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape:false,
    noCache: true,
})

server.get("/", function(req, res) {
    const about = {
        avatar_url:  'imagens/baixados.png',
        name: "Pedro Neves",
        role: "Front-End Developer",
        description: 'Programador front-end e UX Design que busca melhorar a experiência do usuário e implementação da parte do design da aplicação. Objetivo é ser um desenvolvedor da <a href="https://ciandt.com/br/pt-br" target="_blank">CI&T.',
        links: [ 
            { name: 'Github', url:'https://github.com/tyson-neves'},
            { name: 'Rocketseat', url:'https://app.rocketseat.com.br/me/pedro-neves-1567041448'},
            { name: 'Linkedin', url:'https://www.linkedin.com/in/devpedro-neves/'},
        ]
    }


    return res.render("about", {about: about});
});

server.get("/portfolio", function(req, res) {

    return res.render("portfolio", {items: videos});
});

server.listen(5000, function(){
    console.log('server is running');
})