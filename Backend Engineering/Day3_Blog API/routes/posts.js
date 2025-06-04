const router = require('express').Router();
const Post = require('../models/Post');
const auth = require('../middleware/authMiddleware');

// Create Post
router.post('/', auth, async (req, res) => {
    try {
        const post = await Post.create({...req.body, author: req.user.userid});
        res.status(201).json(post);
    } catch(err) {
        res.status(400).json({ error: err.message});
    }
});

// GET all posts
router.get('/', async (req, res) => {
    const posts = await Post.find().populate('author', 'username').sort({ createdAt: -1});
    res.status(200).json(posts);
});

// Get single post
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id).populate('author', 'username');
    if (!post) return res.status(404).json({error: "Post not found"});
    res.status(200).json(post);
});

// PUT: update a post
router.put("/:id", auth, async (req, res) => {
    const post = await Post.findOneAndUpdate(
        {_id: req.params.id, author: req.user.userid },
        req.body,
        { new: true, runValidators: true }
    );
    if (!post) return res.status(404).json({error: "Post Not found or Unauthorized"});
    res.status(200).json(post);
});

// DELETE: a post
router.delete("/:id", auth, async (req, res) => {
    const post = await Post.findOneAndDelete({_id: req.params.id, author: req.user.userid});
    if (!post) return res.status(404).json({error: "Post Not found or unauthorized"});
    res.status(204).json({message: "Post Successfully Deleted"});
});


module.exports = router;
