const dotenv=require("dotenv")
dotenv.config()
const cookieparser=require("cookie-parser")

const express= require("express")
const app=express()
const cors=require("cors")

app.use(cors())
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const userRoutes=require("./routes/user.routes")





app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use("/users", userRoutes)
module.exports=app

 