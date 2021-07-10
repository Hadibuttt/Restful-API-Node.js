//Express
const express = require("express");
const app = express();

//BodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

//DotEnv
const DotEnv= require("dotenv");
DotEnv.config();

//Mongoose
const mongoose= require("mongoose");
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Connected to database"))
.catch((err)=>console.log(err));

//Node
app.get("/",(req,res)=>{
    res.send("Server is Running Slow!");
});

app.listen(process.env.PORT,()=>{
    console.log("Server is Running!")
});

const routes =require("./routes/routes");
app.use("/routes", routes);
app.use("/posts",require("./routes/posts"));