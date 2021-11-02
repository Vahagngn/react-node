import React, { useContext, useEffect, useState } from 'react'
import '../PrivateMessage/privateMessage.css'
import api from '../../../Api'
import { AuthContext } from '../../../context/AuthContext'
import { useAuth } from '../../hooks/auth.hook'
import connectToSocket from '../socket'

export const PrivateMessage = ({ user, onCancel, chatActive, setChatActive }) => {

    const [privateMessages, setMessages] = useState([])
    const { name, last_name } = useAuth()
    const auth = useContext(AuthContext)
    const socket = connectToSocket()

    const sendMessage = () => {
        const messagesBlock = document.getElementById('privateMessage')
        const privateMessage = {
            message: messagesBlock.value,
            privateName: name,
            privateLast: last_name,
            firstUserId: auth.userId,
            secondUserId: user._id
        }
        const newMessages = chatActive.messages
        newMessages.unshift(privateMessage)
        setChatActive(prevChat => {
            return {
                ...prevChat,
                messages: newMessages
            }
        })
        socket.emit('private-message', privateMessage)
        
        messagesBlock.value = ''
    }


    useEffect(() => {
        socket.on(`get-private`, ({ privateMsg }) => {
            if(!chatActive || !chatActive.user) return
            if(chatActive.user._id === privateMsg.firstUserId) {
                const newPrivateMessage = chatActive.messages
                newPrivateMessage.unshift(privateMsg)
                setMessages([...newPrivateMessage])
            } 
        })

        return () => {
            socket.off('get-private')
        }
    }, [chatActive, chatActive.messages, socket, user, auth])

    function getPrivate() {
        api.get(`/messages/private-message`).then(res => {
           setMessages(res)
        })
    }

    useEffect(() => {
        getPrivate()
    }, [user])

    return (
        user
            ? <div className="privateMessageContainer">
                <div className="sendTextContainer">
                    <div className="headerContainer">
                        <h5>{user.name.charAt(0) + '.' + user.last_name} </h5>
                        <button className="btn onCancel" onClick={onCancel}>&#8617;</button>
                    </div>
                    <input
                    style={{
                        border: "1px solid #26a69a",
                        marginTop: "10px"
                    }}
                        className="sendText"
                        type='text'
                        id="privateMessage"
                    />
                </div>
                <div className="sendBtn">
                    <button type="button" className="btn btn-default btn-sm" onClick={sendMessage}>
                        <span className="glyphicon glyphicon-envelope"></span> Send
            </button>
                </div>

                {
                    chatActive.user ?
                        <div className="messageContainer" >
                            {chatActive.messages.length ? chatActive.messages.map((data, index) => {
                                return (
                                    <div className="privtaMessages" key={index} style={{ display: "flex" }}>
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