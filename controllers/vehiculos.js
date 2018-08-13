
const dbsvars = require("../model/db.js")
const MongoClient = dbsvars.MongoClient;
const assert = dbsvars.assert;
const url = dbsvars.url;
const dbName = dbsvars.dbName;
const ObjectID = dbsvars.ObjectID;

class Vehiculos {



    constructor() {



            this.t_vehiculo = 'autobus';



    }


      listarVehiculos(req, res) {



        MongoClient.connect(url,(err, client) => {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false);  
            const db = client.db(dbName);   
            var cursor = db.collection('vehiculos').find().sort({ _id: -1 }).toArray((err, results) => {
                if (err) throw err;
                res.setHeader('Content-Type', 'application/json');
                res.status(201).json(results);
                res.end('yes');
            })

            client.close();
        });


    } //end listarVEhiculos


    crearVehiculo(req, res) {


        MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false); 

            const db = client.db(dbName);
            db.collection('vehiculos').insert(

                {
					t_vehiculo: this.t_vehiculo,
					placas: req.body.placas,
					soat: req.body.soat,
					fecha: req.body.fecha,
					origen: {

						 n_origen: req.body.n_origen,
						 o_lat: req.body.o_lat,
						 o_long: req.body.o_long
					},

					destino: {

						 n_destino: req.body.n_destino,
						 d_lat: req.body.d_lat,
						 d_long: req.body.d_long
						
					},
					conductor: {

						 asignado: req.body.asignado,
						 id: req.body.id,
						 nombre_cond: req.body.nombre_cond
						
					}
				}

            ,(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };

                res.json(result);
                global.debug_logger("se creo el vehiculo con id: "+result.insertedIds[0],true); 
                res.end('yes');

            });

            client.close();
        });


    } //end crearVehiculo

    modificarVehiculo(req, res) {


        MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false); 

            const db = client.db(dbName);
            db.collection('vehiculos').update(

            { '_id': ObjectID(req.body.by) },    
            {
              $set:{
                    t_vehiculo: this.t_vehiculo,
                    placas: req.body.placas,
                    soat: req.body.soat,
                    fecha: req.body.fecha,
                    origen: {

                         nombre: req.body.nombre,
                         lat: req.body.lat,
                         long: req.body.long
                    },

                    destino: {

                         name: req.body.name,
                         lat: req.body.lat,
                         long: req.body.long
                        
                    },
                    conductor: {

                         asignado: req.body.asignado,
                         id: req.body.id,
                         nombre_cond: req.body.nombre_cond
                        
                    }
                }
            },(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };
               
                res.json(result);
                global.debug_logger("se actualizo el vehiculo con id: "+result.nModified,true); 
                res.end('yes');

            });

            client.close();
        });


    } //end modificarVehiculo

    borrarVehiculo(req, res) {


        MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false); 

            const db = client.db(dbName);
            db.collection('vehiculos').remove({ '_id': ObjectID(req.query._id) },(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };
               
                res.json(result);
                global.debug_logger("se eliminó el vehiculo con id: "+result.nModified,true); 
                res.end('yes');

            });

            client.close();
        });


    } //end borrarVehiculo

} //end class Vehiculo


   module.exports = Vehiculos;