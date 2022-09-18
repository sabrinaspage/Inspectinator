const express = require("express");

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


dataRoutes.route("/document/basicData/:documentId").get(function (req, res) {
    let db_connect = dbo.getDocumentDb();
    db_connect
    .collection("records")
    .find({_id: ObjectId(req.params.documentId)})
    .toArray(function (err, result) {
        if (err) throw err;
        res.json([result[0].basicInformation, result[0].createdDate]);
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