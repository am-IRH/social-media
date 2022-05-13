const { Router } = require("express");
const router = new Router();

const User = require("../model/User");
const Post = require("../model/Post");
//create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update a post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await post.updateOne({$set: req.body});
            res.status(200).json({status: "success", success: true, text: "the post has been updated"});
        } else {
            res.status(403).json({text: "you can update only your post"});
        }
    } catch (err) {
      res.status(500).json(err);
    }
});

//delete a post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json({status: "success", success: true, text: "the post has been deleted", post});
        } else {
            res.status(403).json({text: "you can delete only your post"});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

//like/dislike a post
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        console.log(post);

        if(!post.like.includes(req.body.userId)) {
            await post.updateOne({$push: {like: req.body.userId}});
            res.status(200).json({text: "the post has been liked"});
        } else {
            await post.updateOne({$pull: {like: req.body.userId}});
            res.status(200).json({text: "the post has been disliked"});
        }
    } catch (err) {
        res.status(500).json(err);
    }
})
//get a post
router.get("/:id",async (req, res) => {
    const post = await Post.findById(req.params.id);    
    res.status(200).json(post);
})

//get time line the post
router.get("/timeline/all", async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPost = await Post.find({userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.following.map(friendId => {
                return Post.find({ userId: friendId});
            })
        );
        
        return res.status(200).json(userPost.concat(...friendPosts));
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;