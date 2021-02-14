const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.engine('pug', require('pug').__express)
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('layout', {balance: 0});
});

app.post('/deposit', (req, res) => {
    const transaction = parseInt(req.body.transaction);
    const balance = parseInt(req.body.balance);
    console.log(transaction);
    console.log(balance);
    res.render('layout', {balance: balance + transaction});
});

app.post('/withdraw', (req, res) => {
    const transaction = parseInt(req.body.transaction);
    const balance = parseInt(req.body.balance);
    console.log(transaction);
    console.log(balance);
    res.render('layout', {balance: balance - transaction});
});


app.listen(3000, () => {
    console.log(`running on localhost:3000`);
}); // http://localhost:3001/
