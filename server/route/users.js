const { Router } = require("express");
const User = require("../model/User");

const router = Router();

//update user
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        if(req.body.password) {
                try {
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                } catch (err) {
                    return res.status(500).json(err);
                }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            return res.status(200).json({status: "success", success: true, text: "Account has been updated"});
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {

    }
})
// delete user
router.delete("/:id", async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findOneAndDelete(req.params.id);
            console.log(user);
            return res.status(200).json({
                status: "success",
                success: true,
                text: "Account has been updated",
                user: {username: user.username}});
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json({
            status: "Forbidden",
            success: false,
            err: "You can delete only your account!"
        });
    }
})

// get a user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc;
        
        return res.status(200).json({
            status: "success",
            success: true,
            user: {
                ...other
            }
        })
    } catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
})

// follow a user
router.put("/:id/follow", async (req, res) => {
    if(req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(!user.followers.includes(req.body.userId)) {
                await user.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {following: req.body.userId}});
                return res.status(200).json({status: "success", success: true, text: "user has been followed"});
            } else {
                return res.status(403).json("you already follow this user");
            }
        } catch(err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json({
            status: "Forbidden",
            success: false,
            err: "You can't follow yourself"
        });
    }
});

// unfollow
router.delete("/:id/unfollow", async (req, res) => {
    if(req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(user.followers.includes(req.body.userId)) {
                await user.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {following: req.body.userId}});
                return res.status(200).json({status: "success", success: true, text: "user has been unfollowed"});
            } else {
                return res.status(403).json("you not unfollow this user");
            }
        } catch(err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json({
            status: "Forbidden", 
            success: false,
            err: "You can't unfollow yourself"
        });
    }
});

module.exports = router;