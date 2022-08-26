
const {Schema,model}=require("mongoose")

const FeedSchema=new Schema({
    title:String,
    image:String,
    description:String,
    tags:String,
    userId:String
   
    
});

const Feed=model("Feed",FeedSchema)
module.exports=Feed;