const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todos')
const path = require('path')
const config = require('config')
const cors = require('cors')
const MessagesModel = require('./models/Message')
const PrivateMessageModel = require('./models/PrivateMessage')
const session = require('express-session')

const PORT = config.get('port') || 5000
const app = express().use('*', cors());
// const io = require('socket.io')(server)

// const rooms = new Map()


//GLOBAL MESSAGE >>>

app.get('/messages', async (req, res) => {
    const messages = await MessagesModel.find({}).lean()
    res.send(messages.reverse());
})


//PRIVATE MESSAGE >>>
app.get('/private-message/:id', async (req, res) => {
    const privateMessages = await PrivateMessageModel.find({}).lean()
    res.send(privateMessages.reverse())
})


app.get('/get-or-create-chat', async (req, res) => {
    
    const { firstUserId: firstUserId, secondUserId: secondUserId } = req.query
    const privateChats = await PrivateMessageModel.findOne({ firstUserId, secondUserId }).populate('Chats').lean()


    const updateChat = `${firstUserId}--with--${secondUserId}`
    const allId = `${updateChat}--with--${privateChats._id}`
    console.log(allId, "<---All ID--->")
    

    if( privateChats === null ) {
        const newChat = await new PrivateMessageModel({
            firstUserId,
            secondUserId
        })
        newChat.save()
        console.log(newChat, '<--- New Chat --->')
    }
    
    console.log(privateChats, "<--- Private Chat --->")
    // console.log(updateChat, "<--- Update Chat --->")
    
    // console.log(firstUserId, "<---One Id--->")
    // console.log(req.query)
    if(privateChats) {
        return res.json({ chat: privateChats })
    }
    // res.json({ newChat })
})

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(todoRoutes)
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))
// app.use(session({
//     secret: 'cookie_secret',
//     name: 'cookie_name',
//     store: 'sessionStore', // connect-mongo session store
//     proxy: true,
//     resave: true,
//     saveUninitialized: true
// }));


async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        })
        const server = app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
        const io = require('socket.io')(server)

        app.post('/private-message', (req, res) => {
            console.log(req.body)
        })

        io.on('connection', socket => {

            // Global message socket start
            socket.on('message', messageInfo => {
                socket.emit('get-message', {
                    msg: messageInfo
                })
                const message = new MessagesModel({
                    name: messageInfo.name,
                    last_name: messageInfo.last_name,
                    message: messageInfo.message
                });
                message.save()
            })
            // Global message socket END

            // Private message socket start

            socket.on("private-message", (privateMessageInfo) => {
                const { firstUserId, secondUserId, message, user_id, chat_id } = privateMessageInfo


                socket.emit('get-private', {
                    privateMsg: privateMessageInfo, user_id: user_id
                })

                // socket.to(id).emit('onMessage', message)

                try {

                    const private = new PrivateMessageModel({
                        message: message,
                        firstUserId: firstUserId,
                        secondUserId: secondUserId,
                        chat_id: chat_id,
                        user_id: user_id
                    })



                    // const existing = await PrivateMessageModel.findOne({ chat_id, secondUserId, firstUserId, message })
                    // 
                    // if (existing) {
                    // return res.json({ chat: existing })
                    // }


                    // socket.join(chat_id)


                    private.save()

                } catch (err) { console.log(err) }

            })

            // Private message socket END
        })



    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()





// app.get('/private-message/:id', async (req, res) => {
//     const privateMessage = await MessagesModel.find({}).lean()

//     const { id: userId } = req.params;
//     const obj = privateMessage.has(userId)
//       ? {
//           users: [...privateMessage.get(userId).get('users').values()],
//           messages: [...privateMessage.get(userId).get('messages').values()]
//       } : { users: [], messages: [] }
//     res.json(obj)
//     res.send(privateMessage.reverse());
// })

// app.post('/private-message', (req, res) => {
//     const privateMessage = await MessagesModel.find({}).lean()

//     const { userId, userName } = req.body
//     if(!privateMessage.has(userId)){
//         privateMessage.set(
//             userId,
//             new MessagesModel([
//                 ['users', new MessagesModel()],
//                 ['messages', []]
//             ])
//         )
//     }
// })



// app.use((req, res, next) => {
//     //allow access from every, elminate CORS
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.removeHeader('x-powered-by');
//     //set the allowed HTTP methods to be requested
//     res.setHeader('Access-Control-Allow-Methods','POST');
//     //headers clients can use in their requests
//     res.setHeader('Access-Control-Allow-Headers','Content-Type');
//     //allow request to continue and be handled by routes
//     next();
//   });