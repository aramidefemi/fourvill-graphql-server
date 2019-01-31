let mongoose = require('mongoose')
const user = require('./users')
const projects = require('./projects')
var Schema = mongoose.Schema;

let spacesSchema = new mongoose.Schema({
  title: String,
  description: String,
  workspace: { type: Schema.Types.ObjectId, ref: 'workspaces' },
  projects: [{type: Schema.Types.ObjectId, ref: 'projects' }],
  private: Boolean,
  creator: { type: Schema.Types.ObjectId, ref: 'users' },
})

 

 


module.exports = 
 mongoose.model('spaces', spacesSchema)