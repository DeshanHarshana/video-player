const express=require('express');
const mongoose  = require('mongoose');
const router=express.Router();
const Video= require('../models/video');

const db="mongodb+srv://deshan:deshan2233@cluster0.z3fbw.mongodb.net/videoplayer?retryWrites=true&w=majority"
mongoose.Promise=global.Promise;

mongoose.connect(db,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify:false}, function(err){
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


router.put('/video/:id', function(req,res){
  console.log("Update a video");
  Video.findByIdAndUpdate(req.params.id,
    {
      $set:{
        title:req.body.title,
        url:req.body.url,
        description:req.body.description
      }
    },
      {
        new :true
      },
      function(err,updatedVideo){
        if(err){
          res.send("Error updation video");
        }else{
          res.json(updatedVideo);

        }
      }

    );
    });



router.delete('/video/:id', function(req,res){
  console.log("Deleting a video");
  Video.findByIdAndRemove(req.params.id, function(err,deletedVideo){
    if(err){
      res.send("Error deleting video");
    }else{
      res.json(deletedVideo);
    }
  });
});


module.exports=router;
