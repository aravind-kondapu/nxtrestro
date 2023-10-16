const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    foodCatergory: {
        type: String
    },
    foodtype: {
        type: String
    },
    dishName: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    
})


const menu = mongoose.model('menu', menuSchema)
module.exports = menu