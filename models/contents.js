let mongoose = require('mongoose')
const user = require('./users')
var Schema = mongoose.Schema;


let contentsSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  private: Boolean,
  type: String
})



 



 
 


module.exports = 
 mongoose.model('contents', contentsSchema)

 