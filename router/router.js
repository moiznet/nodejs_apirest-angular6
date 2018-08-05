module.exports =  { 

    end_points :  function(app)   {  

       //var controller = require('../controllers/controller.js');
       //app.route('/').get(function(req, res) {   controller.listall(req, res);  });
      
       app.route('/api/conductores')
        .get(function(req, res)    {    res.send("hola tu");  })
        .post(function(req, res)   {     })
        .put(function(req, res)   {     }); 


        app.route('/api/vehiculos')
        .get(function(req, res)    {   res.send("hola tu");   })
        .post(function(req, res)   {     })
        .put(function(req, res)   {      }); 

        app.route('/api/usuarios')
        .get(function(req, res)    { res.send("hola tu");  })
        .post(function(req, res)   {     })
        .put(function(req, res)   {      });


        app.route('/api/logger')
        .get(function(req, res)    {   res.send("hola tu");   });

 
       app.route('/api/asignar')
         .get(function(req, res)    {    res.send("hola tu");   })
         .put(function(req, res)    {      });

     }
	
  }




