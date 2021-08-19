import React, {useContext, useState, useEffect} from 'react'
import {useHttp} from '../hooks/http.hooks'
import {AuthContext} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'
import '../global.css'

export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')

    const pressHandler = async event => {
        if(event.key === 'Enter'){
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/detail/${data.link._id}`)
            }catch (e) {}
        }
    }

    const addClick = async () => {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/detail/${data.link._id}`)
            }catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input 
                      placeholder="Add Link"
                      id="link"
                      type="text"
                      value={link}
                      onChange={e => setLink(e.target.value)}
                      onKeyPress={pressHandler}
                    />
                    <p className="inputText">Press Enter or click on the button</p>
                    <button onClick={addClick} className="btn btn" type="submit">Add Link</button>
                    <label htmlFor="link"></label>
                </div>
            </div>
        </div>
    )
}