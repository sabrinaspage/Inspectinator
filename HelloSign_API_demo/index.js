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

// signature page
app.get('/signature', async (req,res)=>{
    let embed_url;
    try
    {
      // Extract the email & name from the current user session or MongoDB
      embed_url = await hellosign.getEmbedURL("inspector@gmail.com", "John Smith");
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
    };
    res.render("signature", args);
});