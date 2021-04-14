const express = require('express');
const server = express();

const routes = require('./routes')

const path = require('path');

//chamada do ejs engine 
server.set('view engine', 'ejs')

//falando onde estará as views
server.set('views', path.join(__dirname, 'views'))


//passando o css para o site
server.use(express.static("public"));


//receber dados da url
server.use(express.urlencoded({ extended: true }))

server.use(routes);


server.listen(3000, ()=> console.log("server Funcionando"))