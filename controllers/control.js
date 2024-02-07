const URL = require("../models/schema");
const shortid = require("shortid");


// controllers

const GeneratenewshortURl = async(req,res)=>{
    const body = req.body;
    const ShortId = shortid();

    await URL.create({
        ShortID : ShortId,
        RedirectUrl :body.url
    })
}

const redirecttoOriginalPage = ("/:shortid",async(req,res)=>{
    const ShortID = req.params.shortid;
    // console.log(shortId)
    const entry = await URL.findOneAndUpdate({ShortID},{
        $push:{
            VisitedHistory:{timestamp:Date.now()}
        }
    })
    const address = entry.RedirectUrl;
    res.redirect(address)
})

const Analytics = ("/analytics/:shortid",async(req,res)=>{
    const ShortID = req.params.shortid;
    const result = await URL.findOne({ShortID})
    res.json({
    Totalclick:result.VisitedHistory.length,
    analytics:result.VisitedHistory
    })
})

//exporting
module.exports = {
    GeneratenewshortURl,redirecttoOriginalPage,Analytics
};