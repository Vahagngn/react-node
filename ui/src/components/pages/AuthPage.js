import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useHttp } from "../hooks/http.hooks"
import { useMessage } from "../hooks/message.hook"
import '../../components/global.css'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const{loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const [err, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect( () => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            await request('/api/auth/register', 'POST', {...form}).then(res => {
                setError('');
                setSuccess(res.message);
            })
        }catch (e){
            setError(e.message);
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
                setError('');
                auth.login(data.token, data.userId)
                window.location.reload()
        }catch (e){
            setError(e.message);
        }
    }

    return (
        <div className="row">
           <div className="col s6 offset-s3">
               <h1>Links</h1>
               <div className="card blue darken-1" style={{padding: 10}}>
                   <div className="card-content white-text">
                       <span className="card-title">Authorization</span>
                   </div>

                   <div className="input-field">
                       <input 
                       placeholder="Email"
                       id="email"
                       type="text"
                       name="email"
                       className="yellow-input"
                       value={form.email}
                       onChange={changeHandler}
                       style={{textAlign: 'center'}}
                       />
                       <label htmlFor="email"></label>
                   </div>

                   <div className="input-field">
                       <input 
                       placeholder="Password"
                       id="password"
                       type="password"
                       name="password"
                       className="yellow-input"
                       value={form.password}
                       onChange={changeHandler}
                       style={{textAlign: 'center'}}
                       />
                       <label htmlFor="password"></label>
                   </div>

                   <div className="card-action">
                       <button onClick={loginHandler} disabled={loading} className="btn yellow darken-4" style={{marginRight: 10}}>Login</button>
                       <button onClick={registerHandler} disabled={loading} className="btn grey lighten-1 black-text">Registration</button>
                       {!!err ? 
                       <span style={{color: 'red', fontWeight: 'bold'}}>
                           {err}
                        </span> : 
                       <span style={{color: 'yellow', fontWeight: 'bold'}}>
                           {success}
                        </span>}
                   </div>
               </div>
           </div>
        </div>
    )
}