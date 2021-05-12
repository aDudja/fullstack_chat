const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res) {
    const condidate = await User.findOne({email: req.body.email})
    if (condidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, condidate.password)
        if (passwordResult) {
            const token = jwt.sign({
                email: condidate.email,
                userId: condidate._id
            }, keys.jwt, {expiresIn: 3600})

            let {_id, email, name, surname} = condidate
            res.status(200).json({token: `Bearer ${token}`, user: {_id, email, name, surname}})
        } else {
            res.status(401).json({message: 'Не верный пароль.'})
        }
    } else {
        res.status(404).json({message: 'Пользователь с таким email не найден.'})
    }
}

module.exports.register = async function (req, res) {
    const condidate = await User.findOne({email: req.body.email})
    if (condidate) {
        res.status(409).json({
            message: 'Такой email уже занят'
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
            name: req.body.name,
            surname: req.body.surname
        })
        try {
            await user.save()
            res.status(201).json(user)
        } catch (e) {
            errorHandler(res, e)
        }
    }

}