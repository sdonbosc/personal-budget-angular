//Budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

//app.use('/',express.static('public'));
app.use(cors());

var fs = require("fs");

 const budget = {
     myBudget: [
     {
         title : 'Eat out',
         budget:55
     },
     {
         title: 'Rent',
         budget:700
     },
     {
         title: 'Groceries',
         budget:333
     },

 ]
};


//app.get('/budget',(req,res)=>{
    
    //The code below reads the data from myBudget.json file
    app.use('/budget', (req, res) => {
        fs.readFile('../personal-budget/myBudget.json', (err, data) => {
           res.send(data.toString());
        });
    });
        app.use('/donut', (req, res) => {
            fs.readFile('../personal-budget/myDonut.json', (err, data) => {
               res.send(data.toString());
            });
     
});

app.listen(port, () => {
    console.log('Example API listening at http://localhost:${port}');
});