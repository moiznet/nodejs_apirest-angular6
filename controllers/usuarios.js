
const dbsvars = require("../model/db.js")
const MongoClient = dbsvars.MongoClient;
const assert = dbsvars.assert;
const url = dbsvars.url;
const dbName = dbsvars.dbName;
const ObjectID = dbsvars.ObjectID;

class Usuarios {



    constructor() {

            this.rol = 'usuario',
            this.all = "";



    }


    listarUsuarios(req, res) {




        MongoClient.connect(url,(err, client) => {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false);  
            const db = client.db(dbName);   
            var cursor = db.collection('usuarios').find().sort({ _id: -1 }).toArray((err, results) => {
                if (err) throw err;
                res.setHeader('Content-Type', 'application/json'),
                res.status(201).json(results);
                res.end('yes');
            })

            client.close();
        });


    } //end listarConductores


    crearUsuario(req, res) {


        MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false); 

            const db = client.db(dbName);
            var cursor = db.collection('usuarios').insert(
            {
                rol: this.rol,
                nombre: req.body.nombre,
                usuario: req.body.usuario,
                pwd: req.body.pwd,
                email: req.body.email,
                edad: req.body.edad,
                t_doc: req.body.t_doc,
                n_doc: req.body.n_doc
            }
            ,(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };
               
                res.json(result);
                global.debug_logger("se creo el usuario con id: "+result.insertedIds[0],true); 
                res.end('yes');

            });

            client.close();
        });


    } //end crearConductor


    modificarUsuario(req, res) {


        MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false); 

            const db = client.db(dbName);
            db.collection('usuarios').update(

            { '_id': ObjectID(req.body.by) },    
            {
              $set:{
                rol: this.rol,
                nombre: req.body.nombre,
                usuario: req.body.usuario,
                pwd: req.body.pwd,
                email: req.body.email,
                edad: req.body.edad,
                t_doc: req.body.t_doc,
                n_doc: req.body.n_doc
            }
            },(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };
               
                res.json(result);
                global.debug_logger("se actualizo el usuario con id: "+result.nModified,true); 
                res.end('yes');

            });

            client.close();
        });


    } //end modificarConductor

    borrarUsuario(req, res) {


        MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false); 

            const db = client.db(dbName);
            db.collection('usuarios').remove({ '_id': ObjectID(req.query._id) },(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };
               
                res.json(result);
                global.debug_logger("se eliminó el usuario con id: "+result.nModified,true); 
                res.end('yes');

            });

            client.close();
        });


    } //end borrarUsuario


} //end class conductores


    module.exports =  Usuarios;