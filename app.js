const express = require("express"); // hello world express app
const app = express();
const bodyParser = require("body-parser");
var balance = 500;
var withdraw = 250;
var deposit = 250;

// part 2 balance 

app.get("/balance", (req,res) => {
    res.send(`${balance}`);
});

//part 3 withdraw

app.get("/withdraw", (req,res) => {
    res.send(`${withdraw}`);
});
// part 4 deposit 

app.get("/deposit", (req,res) => {
    res.send(`${deposit}`);
});

app.listen(3000); 

