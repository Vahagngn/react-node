const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todos')
const path = require('path')
const config = require('config')
const cors = require('cors')
const MessagesModel = require('./models/MessagesData')

const PORT = config.get('port') || 5000
const app = express().use('*', cors());
// const io = require('socket.io')(server)

// const rooms = new Map()

app.get('/messages', async (req, res) => {
    const messages = await MessagesModel.find({}).lean()
        res.send(messages.reverse());
})

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
app.use(express.json({ extended: true }))

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))


async function start() {
    console.log('START')
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        })
        const server = app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
        const io = require('socket.io')(server)


        io.on('connection', socket => {
            // socket.emit('get-message', {})
            socket.on('message', messageInfo => {
                socket.emit('get-message', {
                    msg: messageInfo
                })
                const message = new MessagesModel({
                    name: messageInfo.name,
                    last_name: messageInfo.last_name,
                    message: messageInfo.message,
                    global: messageInfo.global,
                    private: messageInfo.private
                });
                message.save()
            })

            // socket.on("private message", ({content, to, message, name, last_name}) => {
            //     socket.to(to).emit("private message", {
            //         content,
            //         from: socket.id,
            //         name,
            //         last_name,
            //         message
            //     })
            // })
        })



    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()