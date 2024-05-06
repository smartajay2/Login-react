const express = require("express")
const cors = require("cors")
const app= express()

app.use(cors())
var username="john"
var password=123

app.use(express.urlencoded({extended:true}))

app.get("/login",function(req,res)
{  
  console.log(req.query.username)
   if(req.query.username===username && req.query.password ==password)
    {
      res.send(true)
    }
    else{
      res.send(false)
    }
})



app.listen(4000,function(){
  console.log("Server started....")
})