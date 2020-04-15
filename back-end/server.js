
const express = require('express');
const cors = require('cors');
var multer = require('multer');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
var usermodel=require('./user');
var bookermodel=require('./orderbooker');
var myfilename='';
var myfilename1='';
var myuser=usermodel.find({});
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));


////////////////upload
router.post('/users/upload', (req, res) => {

///console.log(req);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null,myfilename= Date.now() + '-' +file.originalname )
  //myfilename=file.originalname;
}
})

var upload = multer({ storage: storage }).single('file');

upload(req, res, function (err) {
  if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
  } else if (err) {
      return res.status(500).json(err)
  }
return res.status(200).send(req.file)

})


});






////////////////upload1
router.post('/users/upload1', (req, res) => {

  ///console.log(req);
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null,myfilename1= Date.now() + '-' +file.originalname )
    //myfilename=file.originalname;
  }
  })
  
  var upload = multer({ storage: storage }).single('file1');
  
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
  return res.status(200).send(req.file)
  
  })
  
  
  });
  
  
  
  

// create user
router.post('/users/create', (req, res) => {
  var userdetail= new usermodel({
    number:req.body.number,
    username: req.body.username,
    pass:req.body.pass,
    
    
    });
    console.log(userdetail);
    
    
    
    
    userdetail.save(function(err,res1){ 
    if(err )throw err;
    
    myuser.exec(function(err,data){
      if(err) throw err;
      
      ///res.render('index', { title: 'this is table',records:data ,success:'data insereted succfully'}); 
    
    
    
    
    });
    
    
      
      
      });
      
      
});
///////////////////////////// get admin data///////////

router.post('/users/sendadmindata', (req, res) => {
  // var userdetail= new usermodel({
  //   number:req.body.number,
  //   username: req.body.username,
  //   pass:req.body.pass,
    
    
  //   });
  var bookerdetail= new bookermodel({
   

    fname: req.body.fname,
mname: req.body.mname,
lname: req.body.lname,
fathername: req.body.fathername,
gender: req.body.gender,
ph: req.body.ph,
wnumber: req.body.wnumber,
email: req.body.email,
altemail: req.body.altemail,
address: req.body.addredd,
nlandmark: req.body.nlandmark,
city: req.body.city,
province: req.body.province,
country: req.body.country,
zipcode: req.body.zipcode,
bday: req.body.bday,
cnic: req.body.cnic,
quli: req.body.quli,
relegion: req.body.relegion,
facepic: myfilename,
idcard: myfilename1,
bankname: req.body.bankname,
branchname: req.body.branchname,
bankcity:req.body. bankcity,

accountname: req.body.accountname,
type: req.body.type,
accountno: req.body.accountno,
ibn: req.body.ibn,
    
    });
   
    
    
    
    
    bookerdetail.save(function(err,res1){ 
    if(err )throw err;
    
    myuser.exec(function(err,data){
      if(err) throw err;
      
      ///res.render('index', { title: 'this is table',records:data ,success:'data insereted succfully'}); 
    
      res.json('submitted');
    
    
    });
    
    
      
      
      });
      
    

      
      
});
////// get username




//console.log(req);
router.post('/users/getprofile/', function(req, res, next) {



  console.log(req.body.id);

  var editid=usermodel.findById(req.body.id);
  editid.exec(function(err,data){
          if(err) throw err;
          
          res.json(data);
          
          })




  // var editid=empmodel.findById(id);
  // editid.exec(function(err,data){
  //         if(err) throw err;
          
  //         res.render('edit', { title: 'this is table',records:data });
          
  //         })
          
          
          
  //           //res.render('index', { title: 'Express' });
          });


     






// login user
router.post('/users/login', (req, res) => {
  var fusername=req.body.username;

      var fpass=req.body.pass;

 
 var fltrparameter={ $and:[{username:fusername},{pass:fpass}]}


      
      
    
    
      var userfilter=usermodel.find(fltrparameter);
    
    
      userfilter.exec(function(err,data){
      if(err) throw err;
   //console.log(data.username);

   res.json(data);
    
    
    
    });
    
  

      
});

// update user
router.put('/users/update', (req, res) => {
  db.collection("users").updateOne({_id: ObjectId(req.body._id)}, {$set: {
    fullname: req.body.fullname, username: req.body.username
  }}, (err, result) => {
    if(err) throw err;
    console.log('user updated'); 
  });
});

// delete user
router.delete('/users/delete', (req, res) => {
  db.collection("users").deleteOne({_id: ObjectId(req.body._id)}, 
  (err, result) => {
    if(err) throw err;
    console.log('user deleted');
  });
});


app.use('/api', router);

app.listen(3001, () => console.log('Server is up and running...'));