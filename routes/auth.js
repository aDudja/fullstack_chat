const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()

// router.post('/', passport.authenticate('jwt', {session: false}), controller.getAllUsers)
// Защита роутов через Passport jwt


router.post('/login', controller.login)
router.post('/register', controller.register)

module.exports = router