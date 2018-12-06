var express = require('express');
var router = express.Router();
const Usuario = require('../../database/collections/usuario');
/* GET Usuarios  */
router.get('/', function(req, res, next) {
  Usuario.find().exec().then(docs=>{
    if (docs.length == 0) {
      res.json({
        message:"No exiten usuarios en la bd"
      });
    }else{
      res.json(docs);
    }

  }).catch(err=>{
    res.status(500).json({
      error: err.message
    });
  });

});

module.exports = router;
