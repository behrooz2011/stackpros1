const express = require("express");
const mongoose = require("mongoose");
const {President} = require('./models/president');
const {noneFederalist} = require('./models/president');
const app = express();

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/president');
// require('dotenv').config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());


// app.get('/api/presidents',(req,res)=>{
// 	President.find({},(err,presidents)=>{
// 		if(err) return res.status(400).send(err);
// 			res.status(200).send(presidents)
// 	//Find all the woods(a kind of product in this project)
// 	//then let's test it on postman,we should have some
// 	//examples written in the model Wood first
// 	})
// })


// MAIN coding//

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//   path: 'presidents.csv',
//   header: [
//     {id: 'newFullName', title: 'Name'},
//     {id: 'pp', title: 'Party'},
//     {id: 'firstYear', title: 'Presidential Term'},
//     {id: 'president', title: 'President Number'},
//     {id: 'createdAt', title: 'Ingestion Time'},
//   ]
// });

// const data1 = noneFederalist;

// csvWriter
//   .writeRecords(data1)
//   .then(()=> console.log('The CSV file was written successfully'));



//Creating an array of multiple arrays

var bigArray = new Array(noneFederalist.length);
for (var i = 0; i<noneFederalist.length; i++) {
 
bigArray[i] = []
// every empty array in bigArray

var t=[];
 t.push(noneFederalist[i].newFullName);
 t.push(noneFederalist[i].pp);
 t.push(noneFederalist[i].firstYear);
 t.push(noneFederalist[i].president);
 t.push(noneFederalist[i].createdAt);

 bigArray[i]=bigArray[i].concat(t);



// console.log(bigArray[i+1].concat(t))
console.log("T:",t);
}

console.log("bigArray",bigArray);
// var y=[];
// var t=[1,2];
// console.log(y.concat(x))
// console.log(bigArray);


//create a copy of CSV locally
var fs = require('fs');
var csv = require('fast-csv');
var ws = fs.createWriteStream('./server/presidents.csv');
var finalArray=[["Name","party","Presidential Term","President Number","ingestion Time"]].concat(bigArray);

csv.write(finalArray,{headers:true}).pipe(ws);


//Getting the CSV from AWS s3 service (externally)

app.get('/download', function(req, res){
  const file = `https://mybucket8080.s3.us-east-2.amazonaws.com/presidents.csv`;
  res.redirect(file); // Set disposition and send it.
});

const port = process.env.DATABASE || 3010;
app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
    // console.log("noneFed: ",noneFederalist)
})
