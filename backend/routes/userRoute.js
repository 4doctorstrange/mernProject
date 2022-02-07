const express = require('express')
const { loginUser } = require('../controllers/userController')
const UserController = require('../controllers/userController')
const router = express.Router()

router.get('/',UserController.getAllUSers)
router.get('/:id',UserController.getUser)
router.post('/register',UserController.registerUser)
router.post('/login',UserController.loginUser)

module.exports = router