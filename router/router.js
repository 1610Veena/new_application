const router = require("express").Router();
const{table} = require("./Table");
// const{table1} = require("./Tablee");
const express = require('express');


const bcrypt = require('bcryptjs');    
const server = express();
const PORT = process.env.PORT || 3000;

 server.use(express.json());


const users = [];

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const { fname, lname, email, password } = req.body;

    const existingUser = await users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).send('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
        fname,
        lname,
        email,
        password: hashedPassword
    }
    const saveuser = await table.create(user);
    // users.push({
    //     fname,
    //     lname,
    //     email,
    //     password: hashedPassword
    // });

    res.status(201).send('User created successfully');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(401).send('Invalid email or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).send('Invalid email or password');
    }

    res.send('Login successful');
});

module.exports = router;