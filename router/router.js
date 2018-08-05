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



         MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            //global.debug_logger("Conectado al servidor",false); 

            const db = client.db(dbName);
            var cursor = db.collection('conductores').insert({

                rol: "test",
                cid:  "test",
                nombre:  "test",
                t_doc:  "test",
                n_doc:  "test",
                rh:  "test",
                asignado:  "test"

            },(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };
               
                res.json(result);
                console.log("se creo el conductor con id: "+result.insertedIds[0],true); 
                res.end('yes');

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




