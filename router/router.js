module.exports =  { 

    end_points :  function(app)   {  

       //var controller = require('../controllers/controller.js');
       app.route('/').get(function(req, res) {  res.send("animo");  });
      
       app.route('/api/conductores')
        .get(function(req, res)    {      })
        .post(function(req, res)   {   

           var  MongoClient = require('mongodb').MongoClient,
            assert = require('assert'),
            url = process.env.MONGODB_URI || "mongodb://localhost:27017",
            dbName= 'transportadores_asociados',
            ObjectID = require('mongodb').ObjectID;



         MongoClient.connect(url+'?authMode=scram-sha1',(err, client)  =>  {
            assert.equal(null, err);
            //global.debug_logger("Conectado al servidor",false); 

            const db = client.db(dbName);
      

         

             db.collection('conductores').insertOne({

                rol: "test",
                cid:  "test",
                nombre:  "test",
                t_doc:  "test",
                n_doc:  "test",
                rh:  "test",
                asignado:  "test"

            }, function(err, doc) {
                 if (err) {
                   handleError(res, err.message, "Failed to create new contact.");
                 } else {
                   res.status(201).json(doc.ops[0]);
                 }
              });

   

            client.close();
        });  


         })
        .put(function(req, res)   {     }); 


        app.route('/api/vehiculos')
        .get(function(req, res)    {      })
        .post(function(req, res)   {     })
        .put(function(req, res)   {      }); 

        app.route('/api/usuarios')
        .get(function(req, res)    {    })
        .post(function(req, res)   {    })
        .put(function(req, res)   {     });


        app.route('/api/logger')
        .get(function(req, res)    {      });

 
       app.route('/api/asignar')
         .get(function(req, res)    {       })
         .put(function(req, res)    {    });

     }
	
  }




