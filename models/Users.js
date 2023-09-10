const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number
})

const userModel = mongoose.model("user_data", userSchema);
module.exports = userModel;