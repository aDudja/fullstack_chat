const express = require('express')
const controller = require('../controllers/message')
const router = express.Router()
const passport = require('passport')


// router.post('/', passport.authenticate('jwt', {session: false}), controller.getAllUsers)
// Защита роутов через Passport jwt

router.post('/getByChatId', passport.authenticate('jwt', {session: false}), controller.getByChatId)
router.post('/create', passport.authenticate('jwt', {session: false}), controller.create)

module.exports = router