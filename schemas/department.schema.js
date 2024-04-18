const mongoose = require('mongoose');

const departmentSChema = new mongoose.Schema({
    namedp:{
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
 
const Department = mongoose.model("Department", departmentSChema);
module.exports = {
    Department
};