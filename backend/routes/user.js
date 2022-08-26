const User=require("../models/user")
const {Router}=require("express")
const Feed=require("../models/Feed")
const multer=require("multer")
const userRouter=Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"./uploads")
    },
    filename: function (req, file, cb) {
        console.log("Filename",req.file,file)
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
      
    }
  })
  
  const uploads = multer({ storage: storage })

// const uploads=multer({dest:"./uploads"})

userRouter.get("/:userId",async(req,res)=>{
    const {userId}=req.params;
    const user=await User.findById({userId})
    if(user){
    res.send(user)
    }
    else{
        res.status(404).send({message:"user not found"})
    }
    
})
userRouter.get("/:userId/feed",async (req,res)=>{
    const {userId}=req.params;
    const feeds=await Feed.find({userId});
     
     console.log(feeds)
    return res.send(feeds)
})
userRouter.post("/:userId/feed",uploads.single("image"),async (req,res)=>{
    const {userId}=req.params;
    const {title,description,tags}=req.body;
    const image=req.file.originalname;
    

    const feed=new Feed({
        title,
        description,
        tags,
        image,
        userId
})
    await feed.save();
    return res.send("success")
     


})


module.exports=userRouter;