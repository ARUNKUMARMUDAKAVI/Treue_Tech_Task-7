const model = require('../model/Signup.mongo');

function postUserDetails(req, res){
    console.log(req.body.name)
    if(!req.body.name){
        return res.status(400).json({
            error: 'Data Invalid'
        })
    }
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };
    model.push(newUser);
    res.json(newUser);
}

module.exports = {
    postUserDetails,
};