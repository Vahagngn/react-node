import React, { useContext, useEffect, useState } from 'react'
import '../PrivateMessage/privateMessage.css'
import api from '../../../Api'
import { AuthContext } from '../../../context/AuthContext'
import { useAuth } from '../../hooks/auth.hook'
import connectToSocket from '../socket'

export const PrivateMessage = ({ user, onCancel, chatActive }) => {

    const [privateMessages, setMessages] = useState([])
    const { name, last_name } = useAuth()
    const auth = useContext(AuthContext)
    const socket = connectToSocket()
   
   
    // function getPrivate() {
        // api.get(`/private-message`).then(res => {
        //    setMessages(res)
        // })
    // }

    const sendMessage = () => {
        const privateMessages = document.getElementById('privateMessage')

        if (privateMessages) {
            socket.emit('private-message', {
                message: privateMessages.value,
                privateName: name,
                privateLast: last_name,
                firstUserId: auth.userId,
                secondUserId: user._id
            })
        }

        privateMessages.value = ''
    }


    useEffect(() => {
        socket.on('get-private', ({ privateMsg, secondUserId, firstUserId }) => {
            const newPrivateMessage = chatActive.messages
            newPrivateMessage.unshift(privateMsg)
            setMessages([...newPrivateMessage])
            // socket.emit("getMessage", {
            //     secondUserId,
            //     firstUserId,
            //     privateMsg
            // });
        })

        return () => {
            socket.off('get-private')
        }
    }, [chatActive.messages, socket])

    function getPrivate() {
        api.get(`/messages/private-message`).then(res => {
           setMessages(res)
        })
    }

    useEffect(() => {
        getPrivate()
    }, [])

    return (
        user
            ? <div className="privateMessageContainer">
                <div className="sendTextContainer">
                    <div className="headerContainer">
                        <h5>{user.name.charAt(0) + '.' + user.last_name} </h5>
                        <button className="btn onCancel" onClick={onCancel}>&#8617;</button>
                    </div>
                    <input style={{
                        border: "1px solid #26a69a",
                        marginTop: "10px"
                    }}
                        className="sendText"
                        type='text'
                        id="privateMessage"
                    />
                </div>
                <div className="sendBtn">
                    {/* {() => deleteUser(todo._id)} */}
                    <button type="button" className="btn btn-default btn-sm" onClick={sendMessage}>
                        <span className="glyphicon glyphicon-envelope"></span> Send
            </button>
                </div>

                {
                    chatActive.user ?
                        <div className="messageContainer" >
                            {chatActive.messages.length ? chatActive.messages.map((data, index) => {
                                // console.log(chatActive)
                                return (
                                    <div key={index} style={{ display: "flex" }}>
                                        <p className="userName">{data.privateName + ' ' + data.privateLast} : &nbsp; </p>
                                        <p className="userText">{data.message}</p>
                                    </div>
                                )
                            }) : null}
                        </div>
                        : ''
                }
            </div> : null
    )
}