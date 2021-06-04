const express=require('express');
const mongoose  = require('mongoose');
const router=express.Router();
const Video= require('../models/video');

const db="mongodb+srv://deshan:deshan2233@cluster0.z3fbw.mongodb.net/videoplayer?retryWrites=true&w=majority"
mongoose.Promise=global.Promise;

mongoose.connect(db,{useNewUrlParser: true,  useUnifiedTopology: true}, function(err){
  if(err){
    console.error("Error!" + err);
  }else{
    console.log("success");
  }
});



router.get('/videos', function(req, res){
  console.log("get request for all videos");
  Video.find({})
  .exec(function(err,videos){
    if(err){
      console.log("Error retriving vidoes");
    }else{
      res.json(videos);
    }
  });
});


router.get('/videos/:id', function(req, res){
  console.log("get request for a single video");
  Video.findById(req.params.id)
  .exec(function(err,videos){
    if(err){
      console.log("Error retriving vidoes");
    }else{
      res.json(videos);
    }
  });
});


router.post('/video', function(req,res){
  console.log("Post a video");
  var newVideo=new Video();
  newVideo.title=req.body.title;
  newVideo.url=req.body.url;
  newVideo.description=req.body.description;
  newVideo.save(function(err, insertedVideo){
    if(err){
      console.log("Error saving video");
    }
    else{
      res.json(insertedVideo);
    }
  });
});

module.exports=router;
