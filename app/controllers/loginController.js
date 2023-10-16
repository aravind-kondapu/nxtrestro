const User = require('../models/usersModel')
const jwt = require('jsonwebtoken')
const loginAuth = (req, res, next) => {
    // const loginDetails = {
    //     phoneNumber: req.body.phoneNumber,
    //     password: req.body.password
    // }
    User.findOne({phoneNumber: req.body.phoneNumber, password: req.body.password})
    .then((response) => {
        console.log(response);

        if(response === null) {
            res.json({
                message: "User Not found",
                success: false
            })
        } else {
            jwt.sign({data : response},"secretkey",{ expiresIn: "20s" },
            (err, token)=>{
                res.json({
                    data: token,
                    message: "Succeessfully loggedin",
                    success: true
                })
            })
            
        }
    })
    .catch((err) => {
        res.json({
            message: "Error Occured!",
            success: false,
            err
        })
    })
}

module.exports = {
    loginAuth
}