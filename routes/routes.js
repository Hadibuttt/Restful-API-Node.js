const router= require("express").Router();

//Get Route
router.get("/ping",(req,res)=>{
    // res.send("pong");
    res.json({ Response:"Pong" });
});

// Post Route
router.post("/pong",(req,res)=>{
    const request= req.body;
    // res.json(request);
    
    if(request.ping){
        res.json(request);
    }

    else{
        res.status(400).json( {Error: "Not Allowed"} )
    }
});


//Patch Route
router.patch("/pingpong",(req,res)=>{
    const request= req.body;
    // res.json(request);
    
    if(request._id == "ping"){
        res.json({"Response":"Hello"});
    }

    else{
        res.status(400).json( {Error: "Not Allowed"} )
    }
});


module.exports = router;