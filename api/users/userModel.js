const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
    }, {
        timestamps: true,
    });

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;