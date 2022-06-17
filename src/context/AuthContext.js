import React, { useEffect, useState } from "react"

const AuthContext = React.createContext({
    isLoggedIn: false,
    username: '',
    userId : '',
    onLogout: () => { },
    onLogin: () => { }
})
const convertToCode = value => {
    const result = []
    for (let index = 0, len = value.length; index < len; index++) {
        result.push(value.charCodeAt(index) + 2)
    }
    return result.join('%')
}
const convertToText = code => {
    const result = []
    const codeArray = code.split('%')
    for (let index = 0, len = codeArray.length; index < len; index++) {
        result.push(Number(codeArray[index]) - 2)
    }
    return String.fromCharCode(...result)
} 
 
 
export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')
    const [userId, setUserId] = useState('')
    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') !== null) {
            setIsLoggedIn(true)
            setUserName(convertToText(localStorage.getItem('isLoggedIn')))
            setUserId(localStorage.getItem('USER_ID'))
        }
    }, [])
 
    const loginHandler = async (userInfo) => { 
        localStorage.setItem('isLoggedIn', convertToCode(userInfo.username))
        localStorage.setItem('USER_ID', userInfo.id)
        setIsLoggedIn(true)
        setUserName(userInfo.username)
        setUserId(userInfo.id) 
    }
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('USER_ID')
        setIsLoggedIn(false)
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                username: userName,
                userId: userId,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >{props.children}</AuthContext.Provider>
    )
}
export default AuthContext