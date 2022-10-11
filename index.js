const express = require("express");
const app = express();

//Estou dizendo para o Express usar o EJS com View engine
app.set('view engine','ejs');

app.get("/",(req, res) =>{
    res.render("index");
});

app.listen(8081,()=>{
    console.log("App rodando!")
});