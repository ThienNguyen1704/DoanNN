const mongoose = require('mongoose');

const productSChema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String
    },
    price:{
        type: Number,
        required: true
    }
})
 
const Product = mongoose.model("Product", productSChema);
module.exports = {
    Product
};