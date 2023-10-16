const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersController')
const loginController = require('../controllers/loginController')

router.get('/', usersController.allUsers)
router.post('/adduser', usersController.addNewUser)
router.post('/login', loginController.loginAuth)

module.exports = router