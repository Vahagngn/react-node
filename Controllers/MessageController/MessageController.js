const MessagesModel = require('../../models/Message')
const { privateMessage, chat } = require('../../models/PrivateMessage')


exports.globalChat = async function (req, res) {
    const messages = await MessagesModel.find({}).lean()
    res.send(messages.reverse());
}

exports.privateChatId = async function(req, res) {
    try {
        const { firstUserId: firstUserId, secondUserId: secondUserId } = req.query
        let privateChat = {}
        privateChat = await chat.findOne({
            $and: [
                { $or: [{ firstUserId: firstUserId }, { secondUserId: firstUserId }] },
                { $or: [{ firstUserId: secondUserId }, { secondUserId: secondUserId }] },
            ]
        })
        if (!privateChat) {
            privateChat = await new chat({
                firstUserId,
                secondUserId
            })
            privateChat.save()
        }
        const messages = await privateMessage.find({chat_id: privateChat._id})
        messages.reverse()

        return res.send({ chat: privateChat, messages })
    } catch (error) {
        console.log(error)
    }
}


exports.privateMessage = async function (req, res) {
        const privateMessages = await privateMessage.find({}).lean()
        res.send(privateMessages.reverse())
}