const {Schema, model, Types} = require('mongoose')
const mongoose = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true  },
    last_name: { type: String, required: true },
    message: { type: String, required: true }
})


// const messageSchema = new Schema({
//     // name: { type: String, required: true  },
//     // last_name: {type: String, required: true },
//     chat_id: {type: Types.ObjectId, required: true, ref: 'Chat'},
//     message: { type: String, required: true },
//     type: {type: String}
// })

// const chatSchema = new Schema({
//     firstUserID: 
//     secoondUserID: 
// })

module.exports = model('Messages', schema)

// const Message = model('Messages', messageSchema)
// const Chat = model('Chats', chatSchema)

// module.exports = {
//     Message,
//     Chat
// }