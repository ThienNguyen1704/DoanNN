const mongoose = require('mongoose');

const categorySChema = new mongoose.Schema({
    nametl:{
        type: String,
        required: true
    },
    type:{
        type: String
    },
    namxb:{
        type: Number,
        required: true
    }
})
 
const Category = mongoose.model("Category", categorySChema);
module.exports = {
    Category
};