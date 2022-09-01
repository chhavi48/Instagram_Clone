const express=require("express")
const authRouter=require("./routes/auth")
const userRouter=require("./routes/user")
const connection=require("./storage/db")
const cors=require("cors")
const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cors({
  
}))
app.use("/static",(express.static("./uploads")))
app.use("/auth",authRouter)
app.use("/profile",userRouter)


// const PORT=process.env.PORT || 8000

app.listen(8000,async()=>{
    await connection;
    console.log("connected to db")
    console.log(" server is runnig http://localhost:8000")
})