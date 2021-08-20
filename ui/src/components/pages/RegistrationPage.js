import { useState } from "react"
import { useHttp } from "../hooks/http.hooks"
import './register.css'


export const RegistrationPage = () => {


    const [err, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [form, setForm] = useState({
        email: '',name: '',last_name: '',  password: ''
    })
    const{loading, request, error, clearError} = useHttp()

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

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value })
    }

    return (
        <div className="row">
           <div className="col s6 offset-s3">
               <h1 style={{color: 'white'}}>Links</h1>
               <div className="card green darken-1" id="register-form" style={{padding: 10}}>
                   <div className="card-content white-text">
                       <span className="card-title" id="card-title">Registration</span>
                   </div>

                   <div className="input-register">
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

                   <div className="input-register">
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

                   <div className="input-register">
                       <input 
                       placeholder="Name"
                       id="name"
                       type="text"
                       name="name"
                       className="yellow-input"
                       value={form.name}
                       onChange={changeHandler}
                       style={{textAlign: 'center'}}
                       />
                       <label htmlFor="text"></label>
                   </div>

                   <div className="input-register">
                       <input 
                       placeholder="Last name"
                       id="last_name"
                       type="text"
                       name="last_name"
                       className="yellow-input"
                       value={form.last_name}
                       onChange={changeHandler}
                       style={{textAlign: 'center'}}
                       />
                       <label htmlFor="text"></label>
                   </div>

                   <div className="card-action">
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