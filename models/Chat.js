const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    members: [{
        ref: 'users',
        type: Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('chats', chatSchema)