const express = require("express");

const hellosign = require("hellosign-sdk")({ key: process.env.HELLOSIGN_API_KEY });

var http = require('http');
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const dataRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


dataRoutes.route("/document").get(function (req, res) {
    res.send("Hello from data checkkk on trwoi");
});

dataRoutes.route("/document/addDoc").post(function (req, response) {
    let db_connect = dbo.getDocumentDb();
    let myobj = {
        basicInformation : req.body.basicInformation,
        highRisk : req.body.highRisk,
        lowRisk : req.body.lowRisk,
        signatureRequestData : req.body.signatureRequestData,
        createdDate : new Date(),
    };

    db_connect.collection("records").insertOne(myobj, function (err, res) {
        if (err) throw err;
        var temp = {documents : res.insertedId};

        let myquery = { _id: ObjectId(req.body.userId) };
        let db_user = dbo.getDb();

        let newData =  { $push: temp};

        db_user.collection("User_Data").updateOne(
        myquery,
        newData, 
        function (err, res) {
            if (err) throw err;
            response.json(res);
        });
    });
});


dataRoutes.route("/document/basicData/:documentId").get(async function (req, res) {
    let db_connect = dbo.getDocumentDb();

    let myquery = { _id: ObjectId(req.params.documentId) };

    var eSign;
    db_connect
    .collection("records")
    .find(myquery)
    .toArray(async function (err, result) {
        if (err) throw err;
        console.log("-----------------");
        console.log(result);
        console.log("-----------------");

        eSign = result[0].signatureRequestData;
        console.log(eSign);

        let response = await hellosign.signatureRequest.get(eSign.request_id);
        let data = {
            request_id : eSign.request_id,
            inspector: {
                sign_id: eSign.inspector.sign_id,
                status: "Incomplete."
            },
            client: {
                sign_id: eSign.client.sign_id,
                status: "Incomplete."
            }
        }

        let current = response.signature_request.response_data;
        for(var i=0; i<current.length; i++) {
            if(current[i].type==="signature") {
                if(current[i].signature_id === eSign.inspector.sign_id) {
                    data.inspector.status = "Complete.";
                } else if(current[i].signature_id === eSign.client.sign_id) {
                    data.client.status = "Complete.";
                }
            }
        }
        
        console.log(data);

        var temp = {signatureRequestData : data };;

        let newData =  { $set: temp};

        db_connect.collection("records").updateOne(
        myquery,
        newData, 
        function (err, resss) {
            if (err) throw err;
        });
        
        res.json([result[0].basicInformation, result[0].createdDate, data]); 
    });
});

dataRoutes.route("/document/data/:documentId").get(function (req, res) {
    let db_connect = dbo.getDocumentDb();
    db_connect
    .collection("records")
    .find({_id: ObjectId(req.params.documentId)})
    .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

 
// This section will help you get a list of all the records.
// recordRoutes.route("/record").get(function (req, res) {
//     let db_connect = dbo.getDb("sample_training");
//     db_connect
//     .collection("grades")
//     .find({})
//     .toArray(function (err, result) {
//         if (err) throw err;
//         res.json(result);
//     });
// });
 
// // This section will help you get a single record by id
// recordRoutes.route("/record/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("records")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// // This section will help you create a new record.
// recordRoutes.route("/record/add").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myobj = {
//    name: req.body.name,
//    position: req.body.position,
//    level: req.body.level,
//  };
//  db_connect.collection("records").insertOne(myobj, function (err, res) {
//    if (err) throw err;
//    response.json(res);
//  });
// });
 
// // This section will help you update a record by id.
// recordRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//      name: req.body.name,
//      position: req.body.position,
//      level: req.body.level,
//    },
//  };
//  db_connect
//    .collection("records")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });
 
// // This section will help you delete a record
// recordRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });
 
module.exports = dataRoutes;