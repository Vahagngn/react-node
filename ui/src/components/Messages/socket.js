import {io} from 'socket.io-client'



export default function connectToSocket(user) {

    if(connectToSocket.exists) {
        return connectToSocket.instance
    }
    const socket = io(`https://testvh94.herokuapp.com?userId=${user}`, { transports: ['websocket'] })
    connectToSocket.exists = true
    connectToSocket.instance = socket

    return socket

}


// export default socket