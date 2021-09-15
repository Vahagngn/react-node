const express = require('express')
const cors = require('cors')
const { privateChatId, globalChat, privateMessage } = require('../Controllers/MessageController/MessageController')

const app = express().use('*', cors());

app.get('/messages', globalChat)

app.get('/get-or-create-chat', privateChatId)

app.get('/private-message', privateMessage)


module.exports = app