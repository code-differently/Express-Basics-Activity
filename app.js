const express = require ("express");
//const bodyParser = require ("body-parser");
    const app = express ();

//app.use (bodyParser.urlencoded ({extended:false}));
//app.use (body.parser.json());

app.get ('/', (req, res) => {
    res.send ("Hello World");
});

app.get ("/balance", (req, res) => {
    res.send ("balance");
});

app.get ("/withdraw", (req, res) => {
    res.send ("withdraw");
});

app.get ("/deposit", (req, res) => {
    res.send ("deposit");
});
    

app.listen (3000);

