var  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userdb', {useNewUrlParser: true, useUnifiedTopology: true});

//mongoose.connect('mongodb+srv://saadi:saadi@cluster0-znryv.mongodb.net/employee', {useNewUrlParser: true, useUnifiedTopology: true});
var conn=mongoose.connection;
var userschm=new mongoose.Schema({

number: String,
username: String,
pass: String,

});



var usermodel=mongoose.model('users',userschm);
module.exports=usermodel;
