var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/test');
 


module.exports = db;