const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://bastienyoussfi:JHL7DXfJaHGEmOkv@cluster0.psmrlkt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({ 
            username, 
            password 
        });
        res.json(userDoc);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});