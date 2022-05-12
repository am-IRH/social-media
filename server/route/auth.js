const { Router } = require("express");
const User = require("../model/User");
const bcrypt = require("bcrypt");

const router = Router();

router.post("/register", async (req, res) => {
    const {username, email, password} = req.body;

    try {
        //generate new Password
        const passwordSalt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, passwordSalt);

        // Create new User
        const newUser = await new User({
            username: username,
            email: email,
            password: hashPassword
        })

        // save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post("/login", async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email: email});
        if(!user) return res.status(404).json({ err:"user not found" });
    
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) return res.json({ err: "wrong password" });

        return res.status(200).json(user);
    } catch (err) { 
        res.status(500).json(err);
    }
})
module.exports = router;