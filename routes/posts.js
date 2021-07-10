const router= require("express").Router();
const Post = require("../model/post")

//Add Post
router.post("/addPost",async(req,res)=>{
    const title= req.body.title;
    const description= req.body.description;
    const newPost = new Post({
        title: title,
        description: description
    });
    
    const savedPost = await newPost.save();
    res.json(savedPost);   
});

//Get Post
router.get("/getPost",async(req,res)=>{
    const posts = await Post.find({});
    res.json(posts);
});

//Update Post
router.patch("/editPost/:postid",async(req,res)=>{
    const _id = req.params.postid;
    await Post.findByIdAndUpdate(_id, { $set: { description: req.body.description } });
    res.json({"Status":"Updated"});
});

//Get One Post
router.get("/getPost/:postid",async(req,res)=>{
    const _id = req.params.postid;
    const post = await Post.findById(_id);
    res.json(post);
});

//Delete Post
router.delete("/deletePost/:postid",async(req,res)=>{
    const _id = req.params.postid;
    await Post.remove({_id:_id});
    res.json({"Status":"Removed"});
});

module.exports = router;