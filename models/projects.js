let mongoose = require('mongoose')
const user = require('./users') 
var Schema = mongoose.Schema;

let projectsSchema = new mongoose.Schema({
  title: String,
  description: String,
  space: { type: Schema.Types.ObjectId, ref: 'spaces' },
  workspace: { type: Schema.Types.ObjectId, ref: 'workspaces' },
  folders: [ {type: Schema.Types.ObjectId, ref: 'folders' }],
  private: Boolean
})
 

 


module.exports = 
 mongoose.model('projects', projectsSchema)
