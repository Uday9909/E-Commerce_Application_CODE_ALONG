const express = require('express');
const Product = require('../model/product');
const User = require('../model/user');
const router = express.Router();
const {pupload} = require('../middleware/multer');


const validateProductsData=(data) => {
    const errors = [];

    if(!data.name) errors.push('Product name is required');
    if(!data.description) errors.push('Product description is required');
    if(!data.category) errors.push('Product category is required');
    if(!data.price || isNaN(data.price) || data.price <=0) errors.push('Valid Product Price Is Required');
    if(!data.stock || isNaN(data.stock) || data.stock <=0) errors.push('Valid Product Stock Is Required');
    if(!data.email) errors.push('Email is required');

    return errors;
};

router.post('/create-product',pupload.array('images',10), async (req,res) => {
    const {name,description,category,price,stock,email,tags} = req.body;
    const images =req.files.map((file) => file.path);

    const ValidationErrors = validateProductsData({ name, description,category,price,stock,email});
    if(ValidationErrors.length > 0) {
        return res.status(400).json({errors: ValidationErrors});
    }

    if(images.length === 0){
        return res.status(400).json({errors: 'Atleast 1 Product image is required'});
    }
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: 'Email does not exist in the users database'})
        }

        const newProduct = new Product({
            name,
            description,
            category,
            price,
            stock,
            email,
            tags,
            images,
        });
        await newProduct.save();

        res.status(201).json({
            message: 'Product created successfully',
            product: newProduct
        });
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Failed to create product'});
    }
});

module.exports = router;