

const dbsvars = require("../model/db.js")
const MongoClient = dbsvars.MongoClient;
const assert = dbsvars.assert;
const url = dbsvars.url;
const dbName = dbsvars.dbName;
const ObjectID = dbsvars.ObjectID;

class Conductores {



    constructor() {

            this.rol = 'conductor',
            this.all = "";



    }


    listarConductores(req, res) {




        MongoClient.connect(url,(err, client) => {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false);  
            const db = client.db(dbName);   
            var cursor = db.collection('conductores').find().sort({ _id: -1 }).toArray((err, results) => {
                if (err) throw err;
                res.setHeader('Content-Type', 'application/json');
                console.log(results);
                res.status(201).json(results);
                res.end('yes');
            })

            client.close();
        });


    } //end listarConductores


    crearConductor(req, res) {


        MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false); 
            const db = client.db(dbName);
              db.collection('conductores').insert({

                rol: this.rol,
                cid: req.body.cid,
                nombre: req.body.nombre,
                t_doc: req.body.t_doc,
                n_doc: req.body.n_doc,
                rh: req.body.rh,
                asignado: req.body.asignado

            },(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };
               
                res.json(result);
                global.debug_logger("se creo el conductor con id: "+result.insertedIds[0],true); 
                res.end('yes');

            });

            client.close();
        });


    } //end crearConductor


    modificarConductor(req, res) {


        MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false); 

            const db = client.db(dbName);
            db.collection('conductores').update(

            { '_id': ObjectID(req.body.by) },    
            {
              $set:{  rol: this.rol,
                cid: req.body.cid,
                nombre: req.body.nombre,
                t_doc: req.body.t_doc,
                n_doc: req.body.n_doc,
                rh: req.body.rh,
                asignado: req.body.asignado
                    }
            },(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };
               
                res.json(result);
                global.debug_logger("se actualizo el conductor con id: "+result.nModified,true); 
                res.end('yes');

            });

            client.close();
        });


    } //end modificarConductor




    borrarConductor(req, res) {


        MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false); 

            const db = client.db(dbName);
            db.collection('conductores').remove({ '_id': ObjectID(req.query._id) },(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };
               
                res.json(result);
                global.debug_logger("se eliminó el conductor con id: "+result.nModified,true); 
                res.end('yes');

            });

            client.close();
        });


    } //end borrarConductor







} //end class conductores


    module.exports =  Conductores;