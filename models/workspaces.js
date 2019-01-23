let mongoose = require('mongoose')
const user = require('users')

let workspacesSchema = new mongoose.Schema({
  url: String,
  owner: user, 
  name: String, 
  theme: String,
  members: [membersSchema]
})

let membersSchema = new mongoose.Schema({
  type: String,
  details: user
})

module.exports = [
 mongoose.model('workspaces', workspacesSchema),
 mongoose.model('members', membersSchema)
]