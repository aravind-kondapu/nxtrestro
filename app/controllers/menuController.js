const Menu = require('../models/menuModel')

const showMenu = (req, res, next) => {
    Menu.find()
    .then((response) => {
        res.json({
            data: response,
            message: "Successfully retived menu",
            success: true
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

const addnewdish = (req, res, next) => {
    
}

module.exports = {
    showMenu
}