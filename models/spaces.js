let mongoose = require('mongoose')  
var Schema = mongoose.Schema;

let spacesSchema = new mongoose.Schema({
  title: String,
  description: String,
  workspace: { type: Schema.Types.ObjectId, ref: 'workspaces' },
  projects: [{type: Schema.Types.ObjectId, ref: 'projects' }],
  private: Boolean,
  creator: { type: Schema.Types.ObjectId, ref: 'members' },
})

 

 


module.exports = 
 mongoose.model('spaces', spacesSchema)