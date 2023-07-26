const express = require('express');
const userController = express.Router();
const { UserModel } = require('../Models/User.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config()

userController.post('/register', async (req, res) => {
    const { username, email, password, age } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.status(200).send({ "error": err.message })
            }
            else {
                const user = new UserModel({ username, email, password: hash, age });
                await user.save();
                res.status(200).send({ "msg": "User was successfully registered" });
            }
        });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


userController.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            console.log(user);
            bcrypt.compare(password, user.password, async (err, result) => {
                if (result) {
                    const token = jwt.sign({ author_id: user._id, author: user.username }, process.env.JWT_SECRET);  //passing the payload for realiting the todos of the particular user
                    res.status(200).send({ "msg": "User was successfully logged in....", token });
                }
                else {
                    res.status(200).send({ "err": "wrong credentials" });
                }
            });
        } else {
            res.status(200).send({ "err": "Wrong credentials" });
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});


module.exports = { userController };
