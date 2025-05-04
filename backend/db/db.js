const mongoose=require('mongoose')

function connectionToDb(){
    mongoose.connect(process.env.DB_CONNECT)
    console.log("connected to db")
}

module.exports=connectionToDb