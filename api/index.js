const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const app = express();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const secret = "zkjabvkjnazlknclkan";
const salt = bcrypt.genSaltSync(10);

app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json( {limit: '10mb'} ));
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://bastienyoussfi:JHL7DXfJaHGEmOkv@cluster0.psmrlkt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({ 
            username, 
            password:bcrypt.hashSync(password, salt) 
        });
        res.json(userDoc);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // Logged in
        jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json({
                id: userDoc._id,
                username,
            });
        });
    } else {
        res.status(400).json({ error: "Login failed" });
    }
});

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info) => {
      if (err) throw err;
      res.json(info);
    });
});

app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
  });

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    const {originalname, path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const {title, summary, content} = req.body;
    const postDoc = await Post.create({
        title: title,
        summary: summary,
        content: content,
        cover: newPath,
    });

    res.json(postDoc);
});

app.get('/posts', async (req, res) => {
    const posts = await Post.find()
        .sort({createdAt: -1})
        .limit(10);
    res.json(posts);
});


app.get('/post/:id', async (req, res) => {
    const {id} = req.params
    const postDoc = await Post.findById(id);
    res.json(postDoc);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});