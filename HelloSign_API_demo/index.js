const express = require('express');
const app = express();
const logger = require('morgan'); // Adds Http logging into the console
require('hbs');  // Handlebars as view engine
require('dotenv').config({silent: true, path: "./hellosign.env"}); // Read values from .env file
const PORT = 3000;

const hellosign = require('./hellosign.js');

app.set('view engine', 'hbs');
app.use(logger('dev'));

// Starts server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));

// sectionSelection
app.get('/sectionSelection', async (req,res)=>{
  res.render("sectionSelection");
});
let bodyparser=require("body-parser");
let jsonParser=bodyparser.json();
let basic_info= {
  // Lets pretend this is the data extrcated from the current Inspectinator user session
  inspector: {
    email: "michaelsalamon78@gmail.com",
    name: "Michael Salamon"
  },
  // Placeholder info
  client: {
    email: "example@gmail.com",
    name: "John Smith"
  }
};
app.post('/sectionSelection', jsonParser, async (req,res)=>{
  if("email" in req.body && "name" in req.body)
  {
    basic_info.client.email=req.body.email;
    basic_info.client.name=req.body.name;
    console.log("client_email:",basic_info.client.email,"client_name:",basic_info.client.name);
    res.json(req.body);
  }
  else
    console.log("Empty request ignored.");
});

// signature page
app.get('/signature', async (req,res)=>{
  let result;
  try
  {
    // Extract the email & name from the current user session or MongoDB
    result = await hellosign.send_Esigns(basic_info);
  }
  catch(error)
  {
    console.log(error);
    res.status(500);
    return res.send("<h2>An error ocurred with HelloSign</h2>");
  }
  res.render("signature", result);
});