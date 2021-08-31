import React, { useEffect, useState } from 'react'
import '../PrivateMessage/privateMessage.css'
import socket from '../socket'
import api from '../../../Api'

export const PrivateMessage = ({ user, onCancel, messages }) => {

    const [messagePrivate, setPrivate] = useState([])

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
                <button type="button" className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-envelope"></span> Send
                </button>
            </div>
            {/* {
                messages.length ?
                messages.map((messagePrivate, index) => { */}
                        <div className="messageContainer">
                            <p className="userName">User Name : </p>
                            <p className="userText">Message text</p>
                        </div>
                    {/* }) */}
                {/* : '' */}
            {/* } */}
        </div>
    )
}

// messages.length ?
//     messages.map((messageText, index) => {
//         return (
//             <div className="nameMessage" key={index}>
//                 <p className="userName">{messageText.name} {messageText.last_name} : &nbsp;</p>
//                 <p style={{ color: 'gray' }}>{messageText.message}</p>
//             </div>
//         )
//     }) : ''