if(process.env.NODE_ENV !== "PRODUCTION"){
    require('dotenv').config({
        path:'./config/.env',
    });
};

const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose 
    .connect(process.env.MONGODB_URI,)
    .then((data) => {
        console.log(`Database is connected successfully : ${data.connection.host}`);
        })
        .catch((err) => console.log('Database connection failed...',err.message));
        };
        module.exports = mongoose.connect;
