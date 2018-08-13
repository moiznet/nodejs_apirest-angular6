const dbsvars = require("../model/db.js")
const MongoClient = dbsvars.MongoClient;
const assert = dbsvars.assert;
const url = dbsvars.url;
const dbName = dbsvars.dbName;
const ObjectID = dbsvars.ObjectID;


const publicIp = require('public-ip');

class Logger extends Date {


    constructor(mensage,save) {

        super();
        this.mounths_letter = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.message =  '>>> ' + mensage ;
        this.time = super.getDate() + '-' + this.mounths_letter[super.getMonth()] + '-' + super.getFullYear() + '/' + super.getHours() + ':' + super.getMinutes() + ':' + super.getSeconds() + ':' + super.getMilliseconds();
        this.save = save;
        
    }

   

    saveLog(ip){ 

    	MongoClient.connect(url,(err, client)  =>  {
            assert.equal(null, err);
            console.log("Conectado al servidor");

            const db = client.db(dbName);
            db.collection('logger').insert({

                
                mensage: this.message,
                fecha: this.time,
                nombre: 'usuario',
                ip: ip


            },(err, result)  => {
                if (err) {
                    console.log(err);
                };

                console.log(result);

            });

            client.close();
        });	

    }
     setLog() {
    
    	publicIp.v4().then(ip => { console.info(this.time+' log: ' + this.message+' ip: '+ip);  global.ip_public = ip;   }); this.save==true && this.saveLog(global.ip_public);
    }
     listarLog(req, res) {


    	MongoClient.connect(url,(err, client) => {
            assert.equal(null, err);
            global.debug_logger("Conectado al servidor",false);  
            const db = client.db(dbName);   
            var cursor = db.collection('logger').find().sort({ _id: -1 }).toArray((err, results) => {
                if (err) throw err;
                res.setHeader('Content-Type', 'application/json');
                res.status(201).json(results);
                res.end('yes');
            })

            client.close();
        });




    }

} /// logger class  



   module.exports = Logger;