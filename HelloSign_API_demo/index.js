const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('morgan'); // Adds Http logging into the console
require('hbs');  // Handlebars as view engine
require('dotenv').config({silent: true, path: "./hellosign.env"}); // Read values from .env file
const PORT = 4000;

const hellosign = require('./hellosign.js');

app.set('view engine', 'hbs');
app.use(cors(),logger('dev'));

// Starts server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));

// sectionSelection
/*app.get('/sectionSelection', async (req,res)=>{
  res.render("sectionSelection");
});*/
let bodyparser=require("body-parser");
let jsonParser=bodyparser.json();
let basic_info= {
  // Setting emails that don't exist and placeholder names
  inspector: {
    email: "1example@gmail.com",
    name: "Robert Porter"
  },
  client: {
    email: "2example@gmail.com",
    name: "John Smith"
  }
};
// fake data
let esign_display= {
  request_id: "2398huu99342h98hu9hu9j823n9398j",
  inspector: {
    email: "1example@gmail.com",
    name: "Robert Porter",
    role: "Unknown",
    sign_id: "3909bd983b98db93",
    status: "Incomplete."
  },
  client: {
    email: "2example@gmail.com",
    name: "John Smith",
    role: "Unknown",
    sign_id: "7363822hdnj8392b8",
    status: "Incomplete."
  }
};
app.post('/sectionSelection', jsonParser, async (req,res)=>{
  if("email1" in req.body && "email2" in req.body && "name1" in req.body && "name2" in req.body)
  {
    basic_info.inspector.email=req.body.email1;
    basic_info.inspector.name=req.body.name1;
    basic_info.client.email=req.body.email2;
    basic_info.client.name=req.body.name2;
    console.log("Received all emails and names!");
    try
    {
      esign_display = await hellosign.send_Esigns(basic_info);
      res.json(req.body);
    }
    catch(error)
    {
      console.log(error);
      res.status(500);
      return res.send({error:"An error ocurred with HelloSign"});
    }
  }
  else
    console.log("Empty request ignored.");
});

// signature page
app.get('/esign', async (req, res) => {
  try
  {
    let both_status= await hellosign.check_Esigns(esign_display.request_id, 
                                                  esign_display.inspector.sign_id,
                                                  esign_display.client.sign_id);
    esign_display.inspector.status=both_status.inspector.status;
    esign_display.client.status=both_status.client.status;
    res.send(esign_display);
  }
  catch(error)
  {
    console.log(error);
    res.status(500);
    return res.send({error:"An error ocurred with HelloSign"});
  }
});