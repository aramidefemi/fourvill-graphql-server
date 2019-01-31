let mongoose = require('mongoose')
const user = require('./users')
const contents = require('./contents')
var Schema = mongoose.Schema;

 


let foldersSchema = new mongoose.Schema({
  title: String,
  description: String,
  space: { type: Schema.Types.ObjectId, ref: 'spaces' },
  workspace: { type: Schema.Types.ObjectId, ref: 'workspaces' },
  content: [{type: Schema.Types.ObjectId, ref: 'contents' }]
})



 
 


module.exports =
 mongoose.model('folders', foldersSchema) 
 