require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// setup
const app = express();
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => "Server is running");


// Database Connection
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/blog-app")
    .then(()=> console.log("Mongo Connected"))
    .catch((err) => console.log(`Error Connecting with Mongo db ${err}`));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port  http://localhost:${process.env.PORT}`);
})