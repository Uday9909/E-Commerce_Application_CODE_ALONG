const express = require('express');
const app = express();
const user=require("./controller/user");

if (process.env.NODE_ENV !== "PRODUCTION") {
    const path = require("path"); 
    require("dotenv").config({
        path: path.join(__dirname, "config/.env"), 
    });
}

app.get('/', (req, res) => {
    return res.send('Welcome to the backend!');
});


module.exports = app;

