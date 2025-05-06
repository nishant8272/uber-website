const express= require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const app=express()
dotenv.config()
const cookieparser=require("cookie-parser")
const userRoutes=require("./routes/user.routes")
const captainRoutes=require("./routes/captain.route")

app.use(cors())
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/captains",captainRoutes)


app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use("/users", userRoutes)
module.exports=app

 