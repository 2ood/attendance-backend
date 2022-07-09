const express = require('express');
const mongoose = require('mongoose');
const app = express();

const {swaggerUi,swaggerSpec} = require('./swagger-setup.js');

require('dotenv').config();

/*MongoDB connection*/
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser : true});

let connection = mongoose.connection;
connection.once('open',()=>{
  console.log("mongodb connection successfully opened.");
});

app.use(express.json());
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/swagger.json',(req,res)=>{
  res.setHeader('Content-Type','application/json');
  res.send(swaggerSpec);
});

app.use('/classes',classesRouter);
app.use('/schedules',classesRouter);
app.use('/teachers',classesRouter);
app.use('/students',classesRouter);

app.listen(8080,function(){
  console.log("listening on port 8080");
});
