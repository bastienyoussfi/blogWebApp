const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const app = express();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const secret = "zkjabvkjnazlknclkan";
const salt = bcrypt.genSaltSync(10);

app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});