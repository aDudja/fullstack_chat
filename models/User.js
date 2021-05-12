const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: 'name'
    },
    surname: {
        type: String,
        default: 'surname'
    },
    avatar: {
        type: String,
        default: 'https://source.unsplash.com/user/erondu/100x100'
    }
})

module.exports = mongoose.model('users', userSchema)