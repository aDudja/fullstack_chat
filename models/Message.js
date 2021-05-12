const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    text: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    chatId: {
        ref: 'chats',
        type: Schema.Types.ObjectId
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('messages', messageSchema)