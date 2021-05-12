const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

const authRoutes = require('./routes/auth')
const profileRoutes = require('./routes/profile')
const chatRoutes = require('./routes/chat')
const messageRoutes = require('./routes/message')
const userRoutes = require('./routes/user')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/user', userRoutes)


module.exports = app