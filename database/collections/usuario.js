const mongoose  = require('../connect.js');

const Schema = mongoose.Schema;

usuarioSchema = Schema({
  name: String,
  email:String,
  password:String,
  fechaRegistro:{
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Usuario',usuarioSchema)
