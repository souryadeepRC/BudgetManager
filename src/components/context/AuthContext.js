import React, { useEffect, useState } from "react"

const AuthContext = React.createContext({
    isLoggedIn: false,
    username: '',
    onLogout: () => { },
    onLogin: () => { }
})
const convertToCode = value => {
    const result =[]
    for (let index = 0,len=value.length; index < len; index++) {
        result.push(value.charCodeAt(index)+2)
    }
    return result.join('%')
}
const convertToText = code => { 
    const result =[]
    const codeArray = code.split('%') 
    for (let index = 0,len=codeArray.length; index < len; index++) {
        result.push(Number(codeArray[index])-2)
    }
    return String.fromCharCode(...result)
}
const validateUser = (email, password) => {
    if (email === 'abc@gmail.com' && password === '1234') {
        return 'Souryadeep'
    }
    return ''
}
export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')
    useEffect(() => {
        console.log(localStorage.getItem('isLoggedIn'));
        if (localStorage.getItem('isLoggedIn') !== null) {
            setIsLoggedIn(true)
            setUserName(convertToText(localStorage.getItem('isLoggedIn')))
        }
    }, [])

    const loginHandler = (email, password) => {
        console.log(email, password);
        const user = validateUser(email, password)
        if (user !== '') { 
            localStorage.setItem('isLoggedIn', convertToCode(user))
            setIsLoggedIn(true) 
            setUserName(user)
            return true
        } else {
            console.log('Wrong Credentials');
            return false
        }
    }
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                username: userName,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >{props.children}</AuthContext.Provider>
    )
}
export default AuthContext