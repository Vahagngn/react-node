import React, { useContext, useEffect, useState } from 'react'
import '../PrivateMessage/privateMessage.css'
import socket from '../../Messages/socket'
import api from '../../../Api'
import { AuthContext } from '../../../context/AuthContext'
import { useAuth } from '../../hooks/auth.hook'

export const PrivateMessage = ({ user, onCancel }) => {

    const [privateMessages, setMessages] = useState([])
    const { name, last_name } = useAuth()
    const auth = useContext(AuthContext)

    function getPrivate() {
        api.get(`/private-message/${user._id}`).then(res => {
            setMessages(res)
        })
    }

    const sendMessage = () => {
        const message = document.getElementById('privateMessage')

        // if(message){
        //     socket.emit('private-message', {
        //         message: message.value,
        //         firstUserId: auth.userId, 
        //         secondUserId: user._id,
        //         chat_id: user._id,
        //         user_id: null
        //     })
        // }
        api.post('/private-message', {
            message: message.value
        })
        console.log(user, 'participant')
        console.log(auth.userId, 'localParticipant')
        
        message.value = ''
    }

    useEffect(() => {
        socket.on('get-private', ({ privateMsg }) => {
            const newMessages = privateMessages
            newMessages.unshift(privateMsg)
            setMessages([...newMessages])
        })

        return () => {
            socket.off('get-private')
        }
    }, [privateMessages])

    useEffect(() => {
        getPrivate()
    }, [])

    return (
        <div className="privateMessageContainer">
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
                <button type="button" className="btn btn-default btn-sm" onClick={sendMessage}>
                    <span className="glyphicon glyphicon-envelope"></span> Send
                </button>
            </div>

            {
                privateMessages.length ?
                    privateMessages.map((privateMessageText, index) => {
                        return (
                            <div className="messageContainer" key={index}>
                                <p className="userName">{name + ' ' + last_name} : &nbsp; </p>
                                <p className="userText">{privateMessageText.message}</p>
                            </div>
                        )
                    })
                    : ''
            }
        </div>
    )
}

// messages.length ?
//     messages.map((messageText, index) => {

//     }) : ''


// const sendMessagePrivate = (content) => {
    //     const privateMessage = document.getElementById('privateMessage')

    //     socket.emit('message', {
    //         message: privateMessage.value,
    //         name: user.name,
    //         last_name: user.last_name,
    //         global: false,
    //         private: true
    //     })
    //     console.log(privateMessage.value)
    //     privateMessage.value = ''
    // }

    // const getPrivate = () => {
    //     api.get('/api/private/message').then(res => {
    //         setPrivate(res)
    //         console.log(res)
    //     })
    // }

    // useEffect(() => {
    //     getPrivate()
    // }, [])

    // useEffect(() => {
    //     sendMessagePrivate()
    // }, [])