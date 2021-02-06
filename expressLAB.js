
const express = require('express');
const app = express ();

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

//account.balance = balance;
 //   account.deposit = function (depositAmount) {

 //   newBalance = account.balance - depositAmount;
 //  console.log("Your balance is now " + newBalance);
//        if (newBalance <= 0) {
 //           console.log("You have insufficient funds!!!");
 //   }   
//};


app.get('/balance', (req, res) => {
    res.send(8000);

});

app.delete('/withdraw', (req, res) => {
    res.send('<h1>Withdraw</h1>');

});
app.put('/deposit', (req, res) => {
    res.send('<h1>Deposit</h1>');

});

app.listen(3000, () => {
	console.log('Server established on port 3000');
});


//var account = function (name, balance){

  //  account.name = name;
  // account.balance = balance;
  
    //account.deposit = function (depositAmount) {
    //        newBalance = account.balance - depositAmount;
    //console.log("Your balance is now " + newBalance);
    //  if (newBalance <= 0) {
   //    console.log("You have insufficient funds!!!");
  //   }
 //  };
  
  //  account.withdraw = function (withdrawAmount){
   //   newBalance = account.balance - withdrawAmount;
 //     console.log("Your balance is now " + newBalance);
  //    if (newBalance <= 0) {
 //      console.log("You have insufficient funds!!!");
  //    }
  
  //  };
  
  //  /account.transfer = function (transferAmount){
  
  //  }
  
 //   console.log("Name: " + name + "; Balance: " + balance);
 // }
  