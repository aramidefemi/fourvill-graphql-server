let mongoose = require('mongoose')

let usersSchema = new mongoose.Schema({
  email: String,
  userName: String,
  fullName: String,
  password: String,
  profilePicture: String,
  timezone: String,
  authrnticationType: String,
  availability: Boolean, 
  businessType: String,
  emailVerification: Boolean,
  workspaceUrls: {
    type: Map,
    of: String
  },
  role: {
    type: Map,
    of: String
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('users', usersSchema)