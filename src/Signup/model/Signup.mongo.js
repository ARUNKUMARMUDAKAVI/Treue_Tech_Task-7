const mongoose = require('mongoose');


const signupSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// connects signupschema with the 'UserDetails' collection
const collection = mongoose.model("collection", signupSchema);

module.exports = collection;