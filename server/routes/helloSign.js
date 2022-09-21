
const hellosign = require("hellosign-sdk")({ key: process.env.HELLOSIGN_API_KEY });


const express = require("express");

var http = require('http');
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record. 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const apiRoutes = express.Router();

apiRoutes.route("/helloSign/sendEsigns").post(async function (req, res) {

    let basic_info = req.body.basic_info;

    let options = {
        test_mode: 1,
        clientId: process.env.HELLOSIGN_CLIENT_ID,
        template_id: process.env.TEMPLATE_ID,
        subject: 'Inspector Form',
        signers: [{
            email_address: basic_info.inspector.email,
            name: 'Inspector',
            role: process.env.SIGNER_ROLE_1
        },
        {
            email_address: basic_info.client.email,
            name: 'Client',
            role: process.env.SIGNER_ROLE_2
        }
        ],
        custom_fields: {  //Merge fields defined in the template
            inspector_name: basic_info.inspector.name,
            inspector_email: basic_info.inspector.email,
            client_name: basic_info.client.name,
            client_email: basic_info.client.email
        }
    }
    
      // 1st create an embeded signature request using a template
      // createEmbeddedWithTemplate
    let response = await hellosign.signatureRequest.sendWithTemplate(options);
    const post_SignReq= {
        signature_request_id: response["signature_request"]["signature_request_id"],
        test_mode: response["signature_request"]["test_mode"],
        title: response["signature_request"]["title"],
        custom_fields: response["signature_request"]["custom_fields"],
        files_url: response["signature_request"]["files_url"],
        details_url: response["signature_request"]["details_url"],
        signature_inspector: response["signature_request"]["signatures"][0],
        signature_client: response["signature_request"]["signatures"][1],
        statusCode: response["statusCode"]
    }
    console.log("POST signatureRequest:", post_SignReq);
    
    res.json({
        request_id: post_SignReq.signature_request_id,
        inspector: {
            sign_id: post_SignReq.signature_inspector.signature_id,
            status: "Incomplete."
        },
        client: {
            sign_id: post_SignReq.signature_client.signature_id,
            status: "Incomplete."
        }
    });
});

apiRoutes.route("/helloSign/getEsignStatus/:request_id/:sign_1/:sign_2").get(async function (req, res) {
    let response = await hellosign.signatureRequest.get(req.params.request_id);
    let result= {
        inspector: {
            status: "Incomplete."
        },
        client: {
            status: "Incomplete."
        }
    }

    let current = response.signature_request.response_data;
    for(var i=0; i<current.length; i++) {
        if(current[i].type==="signature") {
            if(current[i].signature_id === req.params.sign_1) {
                result.inspector.status = "Complete.";
            } else if(current[i].signature_id === req.params.sign_2) {
                result.client.status = "Complete.";
            }
        }
    }

    return result;
});


module.exports = apiRoutes;