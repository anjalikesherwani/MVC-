const express = require("express");
const app = express();
const urlRouter = require("./routes/router")
PORT = 9100


app.use(express.urlencoded({ extended: false }))
app.use("/url",urlRouter)

app.use("/url/analytics",urlRouter)


app.listen(PORT,()=>{
    console.log( `Server is running on port ${PORT}`);
});


