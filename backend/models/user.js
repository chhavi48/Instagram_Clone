
const {Schema,model}=require("mongoose")
const UserSchema=new Schema({
     name:String,
     username:String,
     password:String,
     mobile:Number,
     country:String,
     gender:{
        type:"String",
        enum:["Male","Female"]
     }

})
const user =model("User",UserSchema)
module.exports=user


// {
//    "name":"chhavi",
//    "username":"chhavi45",
//    "email":"sichhavi48@gmail.com",
//    "password":"12345",
//    "mobile":"0987654321",
//    "country":"india",
//    "gender":"female"
//  }