module.exports =  { 

    end_points :  function(app)   {  

       var controller = require('../controllers/controller.js');

       app.use(function(req, res, next) {
          res.header("Access-Control-Allow-Origin", "*");
          res.header('Access-Control-Allow-Methods', 'DELETE');
          //res.header('Access-Control-Allow-Methods', 'PUT');
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          next();
        });




      // app.route('/').get(function(req, res) {  res.send("animo");  });
      
       app.route('/api/conductores')
        .get(function(req, res)    {  controller.listall_conductores(req, res);   })
        .post(function(req, res)   {  controller.crear_conductor(req, res);   })
        .delete(function(req, res)   {  controller.borrar_conductor(req, res);   })
        .put(function(req, res)    {  controller.modificar_conductor(req, res);   }); 


        app.route('/api/vehiculos')
        .get(function(req, res)    {  controller.listall_vehiculos(req, res);   })
        .post(function(req, res)   {  controller.crear_vehiculo(req, res);   })
        .delete(function(req, res)   {  controller.borrar_vehiculo(req, res);   })
        .put(function(req, res)    {  controller.modificar_vehiculo(req, res);   }); 

        app.route('/api/usuarios')
        .get(function(req, res)    {  controller.listall_usuarios(req, res);   })
        .post(function(req, res)   {  controller.crear_usuario(req, res);   })
        .delete(function(req, res)   {  controller.borrar_usuario(req, res);   })
        .put(function(req, res)    {  controller.modificar_usuario(req, res);   });


        app.route('/api/logger')
        .get(function(req, res)    {  controller.listall_log(req, res);   });

 
       app.route('/api/asignar')
         .get(function(req, res)   {       })
         .put(function(req, res)   {  controller.asignar(req, res);   });

     }
	
  }




