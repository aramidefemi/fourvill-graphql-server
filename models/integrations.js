let mongoose = require('mongoose')
const user = require('./users') 
var Schema = mongoose.Schema;


let integrationsSchema = new mongoose.Schema({
  title: String,
  active: Boolean
})

 
 
const integrations = mongoose.model('integrations', integrationsSchema);


module.exports = integrations