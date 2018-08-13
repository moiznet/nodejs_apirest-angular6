const dbsvars = require("../model/db.js")
const MongoClient = dbsvars.MongoClient;
const assert = dbsvars.assert;
const url = dbsvars.url;
const dbName = dbsvars.dbName;
const ObjectID = dbsvars.ObjectID;


class Asignacion {



    constructor(conductorId, flotaId) {

       

    }
    asignar(req, res){

    	this.asignarConductor(req, res); 
    	this.asignarFlota(req, res);

    }


    asignarConductor(req, res) {

    	

        MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false); 

            const db = client.db(dbName);
            console.log('lol: '+req.body.conductor_id);
            db.collection('conductores').update(

            { '_id': ObjectID(''+req.body.condid) },    
            {
              $set:{  "asignado": false   }
            },(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };
               
                res.json(result);
                global.debug_logger("se actualizo el condcutor a asignado con id: "+result.nModified,true); 
                

            });

            client.close();
        });



    }

    asignarFlota(req, res) {

    	

        MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false); 
            	console.log(req.body.vehiid);
            const db = client.db(dbName);
            db.collection('vehiculos').update(

            { '_id': ObjectID(''+req.body.vehiid) },    
            {
              $set:{  "conductor.asignado" : true, "conductor.nombre" : req.body.nombre, "conductor.id" : req.body.condid   }
            },(err, result)  => {
                if (err) {
                    res.json(err);
                    res.end('yes');
                };
               
                //res.json(result);
                global.debug_logger("se actualizo el vehiculo a asignado con id: "+result.nModified,true); 
                res.end('yes');

            });

            client.close();
        });
        


    }

} //end class asignacion


   module.exports = Asignacion;