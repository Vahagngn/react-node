const {Schema, model, Types} = require('mongoose')

const privateSchema = new Schema ({
    message: { type: String, required: true },
    user_id: { type: String },
    chat_id: { type: Types.ObjectId, ref: 'Chats' },
    privateName: { type: String },
    privateLast: { type: String, required: true }
})

const chats = new Schema ({
    firstUserId: { type: String },
    secondUserId: { type: String },
})

// module.exports = model('MessagesPrivate', privateMessage)
// module.exports = model('Chats', chats)
const privateMessage = model('MessagesPrivate', privateSchema)
const chat = model('Chats', chats)

module.exports = {
    privateMessage,
    chat
}


// const PrivateModel = model('MessagesPrivate', privateMessage)
// const ChatsModel = model('Chats', chats)

// module.exports = {
//     PrivateModel,
//     ChatsModel
// }



// module.exports = model('PrivateMessage', privateMessage)

// const messages = new Schema({
//     // _id: {type: Mongoose.model.Types.ObjectId},
//     message: {type: String, required: true},
//     user_id: {type: Number, required: true},
//     chat_id: {type: Mongoose.model.Types.ObjectId, required: true, ref: 'Chat'}
//   })

//   const chats = new Schema({
//     _id: {type: Mongoose.model.Types.ObjectId},
//     firstUserId: {type: Number, required: true},
//     secondUserId: {type: Number, required: true}
//   })




//   // find chat with all messages

//   app.get('/chat-with-user', async (req, res) => {
//     const {firstUserId, secondUserId} = req.body
//   // trying to find users chat
//   chats.find({firstUserId, secondUserId}).populate('Messages')
//   //if chat doesnt exists
//   const newChat = await new chats({
//     firstUserId,
//     secondUserId
//   })
//   newChat.save()
//  })




//   // find user that send the message
//   user.findOne({_id: user_id})
//   module.exports = model('Message', messages)
//   module.exports = model('Chat', chats)

// const Message = model('Messages', messageSchema)
// const Chat = model('Chats', chatSchema)

// module.exports = {
//     Message,
//     Chat
// }