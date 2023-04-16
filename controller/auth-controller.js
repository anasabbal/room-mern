const User = require('../models/user-model');
const {getErrorMessage} = require("../helper/error-handler");


const register = async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        return res.status(201).json({
            message: "Successfully signed up !"
        });
    }catch (err){
        return res.status(400).json({
            error: getErrorMessage(err)
        });
    }
}

module.exports = {
    register
}
