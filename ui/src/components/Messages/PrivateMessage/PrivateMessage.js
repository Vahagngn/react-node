import React, { useEffect } from 'react'
import '../PrivateMessage/privateMessage.css'
import socket from '../socket'

export const PrivateMessage = ({ user, onCancel, messages }) => {

    const sendMessagePrivate = (content) => {
        messages = document.getElementById('privateMessage')
        console.log(messages.value)

        // console.log(messages, "MSG")
        // if (user._id) {
        //     socket.emit("private message", {
        //         content,
        //         message: messages.value,
        //         name: user.name,
        //         last_name: user.last_name,
        //         to: user._id
        //     });
        // }
        // messages.value = ''
    }

    // useEffect(() => {
    //     sendMessagePrivate()
    // }, [])

    return (
        <div className="privateMessageContainer">
            <div className="sendTextContainer">
                <h5>{user.name.charAt(0) + '.' + user.last_name} </h5>
                <button className="btn onCancel" onClick={onCancel}>Cancel</button>
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
                <button type="button" className="btn btn-default btn-sm" onClick={sendMessagePrivate}>
                    <span className="glyphicon glyphicon-envelope"></span> Send
                </button>
            </div>
            {/* { */}
                {/* // messages.length ? */}
                {/* // messages.map((messageText, index) => { */}
                        <div className="messageContainer">
                            <p className="userName">Name : &nbsp;</p>
                            <p className="userText">Message text</p>
                        </div>
                    {/* // }) */}
                    {/* // : '' */}
            {/* // } */}
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