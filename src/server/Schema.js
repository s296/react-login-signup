const mongoose = require('mongoose');
var schema = mongoose.Schema;
var blogschema = new schema({
    fname:  {type: String,required:'required'},
    lname: {type: String,required:'required'},
    phone :{type: String, index: { unique: true } },
    password: String
});

module.exports = mongoose.model('usercollection',blogschema);