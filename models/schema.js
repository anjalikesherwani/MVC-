const { default: mongoose } = require("mongoose");

require("./connection");

//Schema
const UrlSchema = new mongoose.Schema({
  ShortID : { type: String, required: true ,unique:true},
  RedirectUrl : { type: String, required: true },
  VisitedHistory : [{
        timestamp:{
          type:Number
        }
  }],
},{timestamps:true});

//model

const URL = mongoose.model("DBforShortURLGen",UrlSchema)


//exporting
module.exports = URL;