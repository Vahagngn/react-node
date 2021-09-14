import io from 'socket.io-client'




export default function connectToSocket(user) {

    if(connectToSocket.exists) {
        return connectToSocket.instance
    }
    const socket = io.connect(`http://localhost:5000?userId=${user}`, { transports: ['websocket'] })
    connectToSocket.exists = true
    connectToSocket.instance = socket

    return socket

}


// export default socket