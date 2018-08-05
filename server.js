var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    MongoClient = require('mongodb').MongoClient,
    port = process.env.port || 8080;


// bodypharse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


// router premises
var router = express.Router();
var router_module = require('./router/router.js');
router_module.end_points(router);
app.use(router);



app.listen( port , function() {
        global.debug_logger("Node server running on http://localhost:"+port,false);
    });














// var CONTACTS_COLLECTION = "contacts";





// // Create a database variable outside of the database connection callback to reuse the connection pool in your app.
// var db;

// // Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

//   // Save database object from the callback for reuse.
//   db = client.db();
//   console.log("Database connection ready");

//   // Initialize the app.
//   var server = app.listen(port, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
// });

// // CONTACTS API ROUTES BELOW

// // Generic error handler used by all endpoints.
// function handleError(res, reason, message, code) {
//   console.log("ERROR: " + reason);
//   res.status(code || 500).json({"error": message});
// }

// /*  "/api/contacts"
//  *    GET: finds all contacts
//  *    POST: creates a new contact
//  */

// app.get("/api/contacts", function(req, res) {
//   db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
//     if (err) {
//       handleError(res, err.message, "Failed to get contacts.");
//     } else {
//       res.status(200).json(docs);
//     }
//   });
// });

// app.post("/api/contacts", function(req, res) {
//   var newContact = req.body;
//   newContact.createDate = new Date();

//   if (!req.body.name) {
//     handleError(res, "Invalid user input", "Must provide a name.", 400);
//   } else {
//     db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
//       if (err) {
//         handleError(res, err.message, "Failed to create new contact.");
//       } else {
//         res.status(201).json(doc.ops[0]);
//       }
//     });
//   }
// });

// /*  "/api/contacts/:id"
//  *    GET: find contact by id
//  *    PUT: update contact by id
//  *    DELETE: deletes contact by id
//  */

// app.get("/api/contacts/:id", function(req, res) {
//   db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to get contact");
//     } else {
//       res.status(200).json(doc);
//     }
//   });
// });

// app.put("/api/contacts/:id", function(req, res) {
//   var updateDoc = req.body;
//   delete updateDoc._id;

//   db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to update contact");
//     } else {
//       updateDoc._id = req.params.id;
//       res.status(200).json(updateDoc);
//     }
//   });
// });

// app.delete("/api/contacts/:id", function(req, res) {
//   db.collection(CONTACTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
//     if (err) {
//       handleError(res, err.message, "Failed to delete contact");
//     } else {
//       res.status(200).json(req.params.id);
//     }
//   });
// });
