import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../Api'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useAuth } from '../../components/hooks/auth.hook';
import './messages.css'
import socket from './socket'



// const socket = io('http://localhost:5000', { transports : ['websocket','polling', 'flashsocket'] })

// const clickSocket = () => {


// socket.on('poxos', ({poxos, success}) => {
//     console.log(poxos, success)
// })

export const Messages = () => {
    const [users, setUsers] = useState([])
    const [messages, setMessages] = useState([])

    const { name, last_name } = useAuth()

    function getDataUsers() {
        api.get('/api/auth/users/list').then(res => {
            setUsers(res);
        })
    }

    function getMessages() {
        api.get('/messages').then(res => {
            setMessages(res)
        })
    }

    const onUserClickHandler = (e) => {
        console.log(e.target.querySelector('p').innerHTML)

    }

    const sendMessage = () => {
        const message = document.getElementById('message')

        socket.emit('message', {
            message: message.value,
            name: name,
            last_name: last_name
        })
        message.value = ''
    }

    useEffect(() => {
        socket.on('get-message', ({msg}) => {
            const newMessages = messages
            newMessages.unshift(msg)
            setMessages([...newMessages])
        })

        return () => {
            socket.off('get-message')
        }
    }, [messages])

    useEffect(() => {
       

        getDataUsers()
        getMessages()

        
    }, [])

    // window.socket = socket
    return (

        <div style={{ display: "flex" }}>
            {
                users.length ?
                    <>
                        <ListGroup style={{ width: "25%" }}>
                            <div>
                                {users.map((user, index) => {
                                    return (
                                        <div key={index}>
                                            <ListGroupItem
                                                tag="button"
                                                action
                                                onClick={(e) => onUserClickHandler(e)}
                                            >
                                                <p style={{ display: "none" }}>{user._id}</p>
                                                {user.name + " " + user.last_name}
                                            </ListGroupItem>
                                        </div>
                                    )
                                })}
                            </div>
                        </ListGroup>

                        <div className="InputContainer">
                            <input id="message" type="text" style={{
                                border: "1px solid #26a69a",
                                margin: 0
                            }}
                            />
                            <button onClick={sendMessage} type="button" className="btn btn-default btn-sm">
                                <span className="glyphicon glyphicon-envelope"></span> Send Message
                            </button>
                            {
                                messages.length ?
                                    messages.map((messageText, index) => {
                                        return (
                                        <div className="nameMessage" key={index}>
                                            <p className="userName">{messageText.name} {messageText.last_name} : &nbsp;</p>
                                            <p>{messageText.message}</p>
                                        </div>
                                        )
                                    }) : ''
                            }
                        </div>
                    </>
                    : null
            }
        </div>
    )
}





    // return (
    // <div className="wrapper">
    //     <div className="join-block">
    //         <input type="text"
    //             placeholder="Room ID"
    //             value={roomId}
    //             onChange={(e) => setRoomId(e.target.value)}
    //         />
    //         <input type="text"
    //             placeholder="Your Name"
    //             value={userName}
    //             onChange={(e) => setUserName(e.target.value)}
    //         />
    //         <button onClick={onEnter} className="btn btn-success">Login Room</button>
    //     </div>
    // </div>
    // )

    // return (
    //     <div className="wraper">

    //     </div>
    // )


    // return (
    //     <div className="messages-container">
    //         <div className="wrapper">
    //             <div>Name-1</div>
    //             <div>Name-2</div>
    //             <div>Name-1</div>
    //             <div>Name-2</div>
    //         </div>
    //     </div>
    // )


