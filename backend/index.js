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

app.get("/",(req,res)=>{
     res.send("just check")
})
const PORT=process.env.PORT || 8080

app.listen(PORT,async()=>{
    await connection;
    console.log("connected to db")
    console.log(" server is runnig http://localhost:8000")
})