const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.update = async function (req, res) {
    const updated = {
        name: req.body.name,
        surname: req.body.surname
    }
    if (req.file) {
        updated.avatar = req.file.path
    }
    try {
        const profile = await User.findOneAndUpdate(
            {_id: req.user.id},
            {$set: updated},
            {new: true}
            )
            res.status(200).json(profile)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.me = async function (req, res) {
    try {
        const profile = await User.findOne({_id: req.body.id})
        res.status(200).json(profile)
    } catch (e) {
        errorHandler(res, e)
    }
}
