let mongoose = require('mongoose')
const user = require('./users')

let workspacesSchema = new mongoose.Schema({
  url: String,
  owner: user, 
  name: String, 
  theme: String,
  members: [{ type: Schema.Types.ObjectId, ref: 'users' }]
})


module.exports = [
 mongoose.model('workspaces', workspacesSchema)
]