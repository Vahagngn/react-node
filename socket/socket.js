const socket = require('socket.io')
const MessagesModel = require('../models/Message')
const User = require('../models/User')
const {chat, privateMessage} = require('../models/PrivateMessage')


module.exports = server => {
    const io = socket(server)

    io.on('connection', (socket) => {

        const { userId } = socket.handshake.query
        User.findOneAndUpdate({_id: userId}, {isOnline: true}, {new: true}).then((u) => {
           
        })
        socket.join(userId.toString())

        // Global message socket start
        socket.on('message', messageInfo => {
            let { name, last_name, message: messageContent, userId, date } = messageInfo 
            io.emit('get-message', {
                msg: messageInfo
            })
            const message = new MessagesModel({
                name,
                last_name,
                message: messageContent,
                userId,
                date
            });
            message.save()
        })
        // Global message socket END

        
        //  -------------------------------- Private message text START  -------------------------------------------------------------
        
        socket.on(`private-message`, async (privateMessageInfo) => {
            const { message, firstUserId, secondUserId } = privateMessageInfo
            
            const privateChat = await chat.findOne({
                $and: [
                    { $or: [{ firstUserId: firstUserId }, { secondUserId: firstUserId }] },
                    { $or: [{ firstUserId: secondUserId }, { secondUserId: secondUserId }] },
                ]
            })

            const privateText =  new privateMessage({
                message,
                user_id: firstUserId,
                chat_id: privateChat._id,
                privateName: privateMessageInfo.privateName,
                privateLast: privateMessageInfo.privateLast
            })
            privateText.save()
            
            io.to(secondUserId.toString()).emit(`get-private`, {
                privateMsg: privateMessageInfo
            })

        })

        socket.once('disconnect', () => {
            User.findOneAndUpdate({_id: userId}, {isOnline: false}, {new: true}).then((u) => {
               
            })
        })

        //  -------------------------------- Private message text END  -------------------------------------------------------------

    

        //  -------------------------------- Online User START  -------------------------------------------------------------

    })
}


        // app.post('/private-message', async (req, res) => {
        //     // const messages = await new PrivateMessageModel({
        //     //     message: req.body.message
        //     // })
        //     // await messages.save()
        // })