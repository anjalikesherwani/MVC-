const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DBforShortURLGen").then(()=>{
    console.log("mongoDB connected")
}).catch((err)=>{
    console.log("err a gya",err)
})