const express = require("express");
const router = express.Router();
const UserController = require('./../controllers/user.controller')

router.get('/api/users', async (req, res, next) => {
    try {
        const users = await UserController.getUsers()
        res.json(users)
    } catch(error) {
        res.json(error)
    }
})

router.post('/api/users', async (req, res, next) => {
    try {
        const { body } = req
        const result = await UserController.createUser(body)
        res.json(result)
    } catch(err) {
        res.json(error)
    }
})

router.delete('/api/users', async (req, res, next) => {
    try {
        const { id } = req.query
        const result = await UserController.deleteUser(id)
        res.json(result)
    } catch(error) {
        res.json(error)
    }
})

router.put('/api/users', async (req, res, next) => {
    try {
        const { body } = req
        const result = await UserController.updateUser(body)
        res.json(result)
    } catch(err) {
        res.json(err)
    }
})

//ADD USER
module.exports = router