const socket = require('socket.io')
const MessagesModel = require('../models/Message')
const {chat, privateMessage} = require('../models/PrivateMessage')


module.exports = server => {
    const io = socket(server)

    io.on('connection', (socket) => {

        const { userId } = socket.handshake.query
        socket.join(userId.toString())

        // Global message socket start
        socket.on('message', messageInfo => {

            io.emit('get-message', {
                msg: messageInfo
            })
            const message = new MessagesModel({
                name: messageInfo.name,
                last_name: messageInfo.last_name,
                message: messageInfo.message,
                date: messageInfo.date
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

        //  -------------------------------- Private message text END  -------------------------------------------------------------

    

        //  -------------------------------- Online User START  -------------------------------------------------------------


          socket.on('login', async (userId) => {
            // users[socket.id] = data.userId;
            console.log(userId)
          });
        
          socket.on('disconnect', function(){
            // delete users[socket.id];
          });
    })
}


        // app.post('/private-message', async (req, res) => {
        //     // const messages = await new PrivateMessageModel({
        //     //     message: req.body.message
        //     // })
        //     // await messages.save()
        // })