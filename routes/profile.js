const express = require('express')
const controller = require('../controllers/profile')
const router = express.Router()
const passport = require('passport')


const upload = require('../middleware/upload')

// router.post('/', passport.authenticate('jwt', {session: false}), controller.getAllUsers)
// Защита роутов через Passport jwt

router.patch(
    '/update',
    passport.authenticate('jwt', {session: false}),
    upload.single('image'),
    controller.update
)

router.post(
    '/me',
    passport.authenticate('jwt', {session: false}),
    controller.me
)

module.exports = router