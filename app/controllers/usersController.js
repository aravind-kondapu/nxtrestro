const User = require('../models/usersModel')

const allUsers = (req, res, next) => {
    User.find()
    .then((response)=>{
        res.json({
            data: response,
            message: 'Successfully retived users',
            success: true
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

const addNewUser = (req, res, next) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        password: "1234"
    })
    newUser.save()
    .then(() => {
        res.json({
            next,
            message: "User added Successfully",
            success: true
        })
    })
    .catch((err) => {
        console.log("err",err);
        res.json({
            error: err
        })
    })
}

module.exports = {
    allUsers, addNewUser
}