const http =require('http')
const app=require("./app")
const connectionToDb=require("./db/db")

const port = process.env.PORT || 3000

const server= http.createServer(app);




server.listen(port,()=>{
    console.log(` server running on ${port}`)
    connectionToDb()
})