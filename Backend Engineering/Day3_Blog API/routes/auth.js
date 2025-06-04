const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
        const User = await User.create(req.body);
        res.status(201).json({"message": "User Registered Successfully"});
    } catch(err) {
        res.status(400).json({"error": err.message});
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user || !(await user.comparePassword(req.body.password)))
            res.status(401).json({"error": "Invalid Credentials"});
        
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
        res.json({token});
    } catch(err) {
        res.status(400).json({"error": err.message});
    }
})

module.exports = router;
