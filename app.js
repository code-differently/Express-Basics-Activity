const express = require ("express");
    const app = express ();
    
app.get ('/', (req, res) => {
    res.send('Hello World');
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

app.listen(3000);
