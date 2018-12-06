const mongoose  = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Restaurante",{ useNewUrlParser: true }).then(result=>{//172.17.0.1
  console.log("conectado a mongoDB");
}).catch(err=>{
  console.log("error",err);
});
module.exports = mongoose;
