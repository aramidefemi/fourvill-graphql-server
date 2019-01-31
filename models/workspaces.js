let mongoose = require('mongoose')
const user = require('./users')
const integrations = require('./integrations')
var Schema = mongoose.Schema;

let integrationsSchema = new mongoose.Schema({
  title: String,
  active: Boolean
})

let workspacesSchema = new mongoose.Schema({
  url: String,
  creator: { type: Schema.Types.ObjectId, ref: 'users' }, 
  title: String, 
  theme: String,
  domain: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  integrations: [integrationsSchema],
  space: [{type: Schema.Types.ObjectId, ref: 'spaces' }]
})

const workspaces =mongoose.model('workspaces', workspacesSchema); 


module.exports = workspaces