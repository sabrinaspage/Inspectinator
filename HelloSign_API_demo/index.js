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
let client_email="example@gmail.com";
let client_name="example";
app.post('/sectionSelection', jsonParser, async (req,res)=>{
  if("email" in req.body && "name" in req.body)
  {
    client_email=req.body.email;
    client_name=req.body.name;
    console.log("client_email:",client_email,"client_name:",client_name);
    res.json(req.body);
  }
  else
    console.log("Empty request ignored.");
});

// signature page
app.get('/signature', async (req,res)=>{
  console.log("client_email:",client_email,"client_name:",client_name);
  let result, embed_url, sign_id;
  try
  {
    // Extract the email & name from the current user session or MongoDB
    result = await hellosign.getEmbedURL("inspector@gmail.com", "John Smith", client_email, client_name);
    embed_url=result[0];
    sign_id=result[1]
  }
  catch(error)
  {
    console.log(error);
    res.status(500);
    return res.send("<h2>An error ocurred with HelloSign</h2>");
  }
  let args = {
    layout: false,
    hellosign_client_id: process.env.HELLOSIGN_CLIENT_ID,
    embed_url: embed_url,
    sign_id: sign_id
  };
  res.render("signature", args);
});