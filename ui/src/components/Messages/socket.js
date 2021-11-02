import {io} from 'socket.io-client'



export default function connectToSocket(userId) {

    if(connectToSocket.exists) {
        return connectToSocket.instance
    }
    const socket = io(`http://localhost:5000/?userId=${userId}`, { transports: ['websocket'] })
    connectToSocket.exists = true
    connectToSocket.instance = socket

    return socket

}


// export default socket