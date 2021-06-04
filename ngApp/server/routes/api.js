const express=require('express');
const mongoose  = require('mongoose');
const router=express.Router();

const db="mongodb+srv://deshan:deshan2233@cluster0.z3fbw.mongodb.net/videoplayer?retryWrites=true&w=majority"
mongoose.Promise=global.Promise;

mongoose.connect(db,{useNewUrlParser: true,  useUnifiedTopology: true}, function(err){
  if(err){
    console.error("Error!" + err);
  }else{
    console.log("success");
  }
});



router.get('/', function(req, res){
  res.send('api works');
});

module.exports=router;
