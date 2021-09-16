const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todos')
const path = require('path')
const config = require('config')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()



const PORT = process.env.PORT || 5000
const app = express().use('*', cors());
const http = require('http').Server(app);

// app.use(express.static(path.join(__dirname, 'ui/build')));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'ui/build', 'index.html'));
// });
app.use(
  express.static(path.join(__dirname, "build"))
);

app.get('/:path', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.get(`/:path`, (req, res) => {
//   res.sendFile(
//       path.join(__dirname,  "/ui/build/index.html")
//     );
// });

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, 'public')))
app.use(todoRoutes)
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))
app.use('/api/page', require('./routes/meetups.routes'))
app.use('/api/address', require('./routes/favorites.routes'))
app.use('/messages', require('./routes/messages.routes'))


mongoose.connect(config.get('mongoUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})


//                                    <----- SOCKET ----->
require('./socket/socket')(http)

http.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
// const io = require('socket.io')(server)


