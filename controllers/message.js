const Message = require('../models/Message')
const errorHandler = require('../utils/errorHandler')

module.exports.getByChatId = async function (req, res) {
    try {
        const messages = await Message
            .find({chatId: req.body.chatId})
            .sort({date: -1})
            .skip(req.body.offset)
            .limit(req.body.limit)

        res.status(200).json(messages)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function (req, res) {
    try {
        const message = await new Message({
            text: req.body.text,
            chatId: req.body.chatId,
            user: req.user.id // req.body.userId POSTMAN
        }).save()
        res.status(201).json(message)
    } catch (e) {
        errorHandler(res, e)
    }
}
