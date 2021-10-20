import React, { useContext, useEffect, useState } from 'react'
import api from '../../Api'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useAuth } from '../../components/hooks/auth.hook';
import './messages.css'
import { PrivateMessage } from './PrivateMessage/PrivateMessage';
import { AuthContext } from "../../context/AuthContext"
import connectToSocket from './socket'


export const Messages = () => {
    const [users, setUsers] = useState([])
    const [messages, setMessages] = useState([])
    const [chatActive,setChatActive] = useState({
        user: null,
        messages: null
    })

    const auth = useContext(AuthContext)

    const socket = connectToSocket(auth.userId)
    const { name, last_name } = useAuth()

    function getDataUsers() {
        api.get('/api/auth/users/list')
            .then(res => {
                const participants = res.filter(u => u._id !== auth.userId)
                setUsers(participants);
            })
    }

    function getMessages() {
        api.get('/messages/messages').then(res => {
            setMessages(res)
        })
    }

    const onUserClickHandler = async (e) => {
        setChatActive({user: null, messages: null})
        const user_id = e.target.querySelector('p').innerHTML;
        const chatAndMessages = await api.get(`/messages/get-or-create-chat?firstUserId=${auth.userId}&secondUserId=${users.filter(user => user._id == user_id)[0]._id}`)
        setChatActive({user: users.filter(user => user._id == user_id)[0], messages: chatAndMessages.messages});
    }

    const onCancel = () => {
        setChatActive(null)
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

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            const message = document.getElementById('message')

            socket.emit('message', {
                message: message.value,
                name: name,
                last_name: last_name
            })
            message.value = ''
        }
    }

    useEffect(() => {
        socket.on('get-message', ({ msg }) => {
            const newMessages = messages
            newMessages.unshift(msg)
            setMessages([...newMessages])
        })

        return () => {
            socket.off('get-message')
        }
    }, [socket, messages])

    useEffect(() => {
        getDataUsers()
        getMessages()
    }, [])

    window.socket = socket
    return (

        <div style={{ display: "flex" }}>
            {
                users.length ?
                    <>
                        <ListGroup className="list-users">
                            <div>
                                {users.map((user, index) => {
                                    return (
                                        <div key={index}>
                                            <ListGroupItem
                                                className="btn btn-users"
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
                            <div className="textMessage">
                                <input
                                    id="message"
                                    type="text"
                                    onKeyPress={pressHandler}
                                    style={{
                                        border: "1px solid #26a69a",
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div className="sendButtonContainer">
                                <button onClick={sendMessage} type="button" id="sendButton" className="btn btn-default btn-sm">
                                    <span className="glyphicon glyphicon-envelope"></span> Send Message
                            </button>
                            </div>
                            <div className="messagesContainer">
                                {
                                    messages.length ?
                                        messages.map((messageText, index) => {
                                            return (
                                                <div className="nameMessage" key={index}>
                                                    <p className="userName">{messageText.name} {messageText.last_name} : &nbsp;</p>
                                                    <p style={{ color: 'gray' }}>{messageText.message}</p>
                                                </div>
                                            )
                                        }) : ''
                                }
                            </div>
                        </div>
                            {
                                chatActive ? 
                                <PrivateMessage
                                            chatActive={chatActive}
                                            user={chatActive.user}
                                            onCancel={onCancel}
                                            // getDataUsers={getDataUsers}
                                        /> 
                                : null
                            }
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


