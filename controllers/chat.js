const Chat = require('../models/Chat')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async function (req, res) {
    try {
        const chat = await new Chat({
            members: [req.user.id, req.body.userId]
        }).save()
        res.status(201).json(chat)
    } catch (e) {
        errorHandler(res, e)
    }
}

