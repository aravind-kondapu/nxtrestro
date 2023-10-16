const express = require('express')
const router = express.Router()

const menuRoute = require('../controllers/menuController')

router.get('/', menuRoute.showMenu)

module.exports = router