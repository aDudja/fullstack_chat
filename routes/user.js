const express = require('express')
const controller = require('../controllers/user')
const router = express.Router()
const passport = require('passport')

// router.post('/', passport.authenticate('jwt', {session: false}), controller.getAllUsers)
// Защита роутов через Passport jwt

router.post('/getUsers', passport.authenticate('jwt', {session: false}), controller.getUsers)

module.exports = router