const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.getUsers = async function (req, res) {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (e) {
        errorHandler(res, e)
    }
}
