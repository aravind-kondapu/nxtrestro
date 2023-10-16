const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String
    }, 
    lastName: {
        type: String
    },
    role: {
        type: String
    },
    phoneNumber: {
        type: Number,
        unique: true
    },
    email: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    address: {
        type: String
    },
    password: {
        type: String
    },

}, {timestamps: true})

const user = mongoose.model('users', userSchema) 

module.exports = user