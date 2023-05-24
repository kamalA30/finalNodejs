// User.js

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

let user = mongoose.model('User', User)

module.exports = user