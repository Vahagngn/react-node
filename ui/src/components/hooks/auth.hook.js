import { useCallback, useEffect, useState } from "react"

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')

    const login = useCallback( (jwtToken, id, username, lastname) => {
        setToken(jwtToken)
        setUserId(id)
        setName(username)
        setLastName(lastname)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken, name: username, last_name: lastname
        }))
    }, [])

    const logout = useCallback( () => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect( () => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if(data && data.token){
            login(data.token, data.userId, data.name, data.last_name)
        }
        setReady(true)
    }, [login])

    return { login, logout, token, userId, name, last_name, ready }
}