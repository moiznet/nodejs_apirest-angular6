var util   = require('util');
var format = require('util').format;

const dbsvars     = require("../model/db.js")
const MongoClient = dbsvars.MongoClient;
const assert      = dbsvars.assert;
const url         = dbsvars.url;
const dbName      = dbsvars.dbName;
const ObjectID    = dbsvars.ObjectID;

const conductoresclass = require('./conductores.js')
const vehiculosclass   = require('./vehiculos.js')
const usuariosclass    = require('./usuarios.js')
const asignacionclass  = require('./asignacion.js')
const loggerclass      = require('./logger.js')


global.debug_logger = (mensage,save) => { let logger = new loggerclass(mensage,save);  logger.setLog()}
global.ip_public = '';


module.exports = {

    listall_conductores: (req, res) => { let conduc  = new conductoresclass();  conduc.listarConductores(req, res);   },
    crear_conductor:     (req, res) => { let conduc  = new conductoresclass();  conduc.crearConductor(req, res);   },
    modificar_conductor: (req, res) => { let conduc  = new conductoresclass();  conduc.modificarConductor(req, res);   },
    borrar_conductor:    (req, res) => { let conduc  = new conductoresclass();  conduc.borrarConductor(req, res);   },    
    listall_vehiculos:   (req, res) => { let vehicu  = new vehiculosclass(); vehicu.listarVehiculos(req, res);   },
    crear_vehiculo:      (req, res) => { let vehicu  = new vehiculosclass(); vehicu.crearVehiculo(req, res);   },
    modificar_vehiculo:  (req, res) => { let vehicu  = new vehiculosclass();  vehicu.modificarVehiculo(req, res);   },
    borrar_vehiculo:    (req, res) => { let vehicu  = new vehiculosclass();  vehicu.borrarVehiculo(req, res);   },
    listall_usuarios:    (req, res) => { let usuario = new usuariosclass(); usuario.listarUsuarios(req, res);   },
    crear_usuario:       (req, res) => { let usuario = new usuariosclass(); usuario.crearUsuario(req, res);   },
    modificar_usuario:   (req, res) => { let usuario = new usuariosclass();  usuario.modificarUsuario(req, res);   },
    borrar_usuario:    (req, res) => { let usuario  = new usuariosclass();  usuario.borrarUsuario(req, res);   },
    asignar:             (req, res) => { let asignacionobj = new asignacionclass();  asignacionobj.asignar(req, res);   },
    liberar:             (req, res) => { let liberacionobj = new asignacionclass();  liberacionobj.liberar(req, res);   },
    listall_log:         (req, res) => { let loggerobj = new loggerclass('cargando lista de logs',false);    loggerobj.listarLog(req, res);    }
}