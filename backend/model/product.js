const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Provide the product name"],
        },
        description:{
            type:String,
            required:[true,"Provide the product description"]
        },
        category:{
            type:String,
            required:[true,"Provide the product category"]
        },
        tags:{
            type:[String],//Array of tags
            default :[],

        },
        price:{
            type:Number,
            required:[true,"Provide the product price"]
        },
        stock:{
            type:Number,
            required:[true,"Provide the product stock"]
        },
        images:{
            type:[String],//Array of images
            required:[true,"Please upload product images"],
        },
        email:{
            type:String,
            required:[true,"Provide an email"],
            match :[/.+@.+\..+/,"Please provide a valid email address"],
        },
        createdAt:{
            type:Date,
            default: Date.now,
        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Product",productSchema)