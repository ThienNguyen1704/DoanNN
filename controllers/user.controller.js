const { User } = require('../schemas/user.schema')
const { Product } = require('../schemas/product.schema')
const { Category } = require('../schemas/category.schema')
const { Department } = require('../schemas/department.schema')


module.exports.getUsers = async () => {
    try {
        return await User.find()
    } catch(err) {
        return err
    }
}

module.exports.createUser = async (user) => {
    if(user) {
        const result = await User.create({
            fullname: user.fullname,
            email: user.email,
            password: user.password
        })
        return result
    } else {
        return false
    }
}

module.exports.deleteUser = async (userId) => {
    try {
        const result = await User.findByIdAndDelete(userId)
        return result
    } catch(err) {
        return err
    }
}

module.exports.updateUser = async (user) => {
    try {
        const {id, fullname, email, password} = user
        const result = await User.findByIdAndUpdate(id, {
            fullname: fullname,
            email: email,
            password: password
        })
        return result
    } catch(err) {
        return err
    }
}