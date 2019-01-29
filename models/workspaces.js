let mongoose = require('mongoose')
const user = require('./users')
var Schema = mongoose.Schema;

let workspacesSchema = new mongoose.Schema({
  url: String,
  owner: { type: Schema.Types.ObjectId, ref: 'user' }, 
  name: String, 
  theme: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'user' }]
})


module.exports = [
 mongoose.model('workspaces', workspacesSchema)
]