
var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    var mongodb = require("mongodb");
    var ObjectID = mongodb.ObjectID;
    var MongoClient = require('mongodb').MongoClient;
    var port = process.env.PORT || 8080;



    // bodypharse
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));





app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

   // router premises
    var router = express.Router();
    var router_module = require('./router/router.js');
    router_module.end_points(app);



    

    app.use(router);



       app.listen( port , function() {
        //global.debug_logger("Node server running on http://localhost:"+port,false);
        console.log("running on port")
    });







