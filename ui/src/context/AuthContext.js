import { createContext } from "react";


function noop(){}

export const AuthContext = createContext({
    token: null,
    userId: null,
    name: null,
    last_name: null,
    login: noop,
    logout: noop,
    info: noop,
    isAuthenticated: false
})